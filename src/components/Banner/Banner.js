import Price from "./elements/Price";
import Burger from "./elements/Burger";
import Count from "./elements/Count";
import {useState} from "react";

const Banner = ({
     dataIngredient,
     ingredients,
     startPrice,
     quantities,
     changeBurger,
     order,
     clearBurger,
     loading
}) => {

    const [modalActive, setModal] = useState(false);
    const actionModal = () => {
        setModal(!modalActive);
    }

    return(
        <section className="banner-block">
            <Price
                dataIngredient = {dataIngredient}
                loading = {loading}
            />
            <Burger
                price = {startPrice}
                order = {order}
                loading = {loading}
                quantities = {quantities}
                clearBurger = {clearBurger}
            />
            <Count
                ingredients = {ingredients}
                changeBurger = {changeBurger}
                quantities = {quantities}
                clearBurger = {clearBurger}
                loading = {loading}
            />
        </section>
    );
}

export default Banner;