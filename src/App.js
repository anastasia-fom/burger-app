import axios from "axios";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import './style/main.css'

import React from 'react'

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            ingredients: [],
            startingPrice: 1,
            prices: [],
            burger: {},
            order: [],
        }
    }

    componentDidMount = async () => {
        try {
            this.setState({ loading: true });
            const { data } = await axios.get(
                "https://burger-api-xcwp.onrender.com/ingredients"
            );
            const ingredients = data.map((ingredient) => {
                return ingredient.name;
            });
            const quantities = data.reduce(
                (acc, curr) => ({ [curr.name]: 0, ...acc }),
                {}
            );

            this.setState({
                prices: data,
                ingredients: ingredients,
                burger: quantities,
            });
        } catch (error) {
            console.log(error);
        }
    };

    changeBurger = (event) => {
        event.preventDefault();

        const clickedButton = event.target.dataset["action"];
        const clickedIngredient = event.target.dataset["ingredient"];

        this.setState( (prevState) => {
                const copyBurgerCreator = {...this.state.burger};
                let finalPrice = prevState.startingPrice;
                const copyOrder = [...prevState.order]

                if (clickedButton === "decrement" &&
                    copyBurgerCreator[clickedIngredient] > 0 &&
                    copyOrder.length < 10) {
                    copyBurgerCreator[clickedIngredient] -= 1;
                    finalPrice -= this.state.prices.find((element) => element.name ===clickedIngredient).price;
                    copyOrder.splice(
                        copyOrder.lastIndexOf(
                            (element) => element === clickedIngredient
                        ), 1
                    );
                } else if (clickedButton === "increment" &&
                    copyBurgerCreator[clickedIngredient] < 5 &&
                    copyOrder.length < 10) {
                    copyBurgerCreator[clickedIngredient] += 1;
                    finalPrice += this.state.prices.find((element) => element.name ===clickedIngredient).price;
                    copyOrder.push(clickedIngredient);
                }
                return {
                    burger: copyBurgerCreator,
                    startingPrice: Math.floor(finalPrice * 100) / 100,
                    order: copyOrder,
                };
            }
        )
    }

    render() {
        const {
            prices,
            startingPrice,
            ingredients,
            burger,
            order,
        } = this.state;

        return(
            <>
                <Header />
                <main>
                    <Banner dataIngredient = {prices}
                            ingredients = {ingredients}
                            startPrice = {startingPrice}
                            quantities  = {burger}
                            changeBurger = {this.changeBurger}
                            order = {order}/>
                </main>

            </>
        );
    }
}

export default App;