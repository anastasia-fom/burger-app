import Price from "./elements/Price";
import Burger from "./elements/Burger";
import Count from "./elements/Count";

const Banner = () => {
    const ingredients = [
        {name: 'Bacon', price: 0.75},
        {name: 'Cheese', price: 1.7},
        {name: 'Salad', price: 0.95},
        {name: 'Pickle', price: 1.25},
        {name: 'Meat', price: 2},
        {name: 'Tomato', price: 0.50},
        {name: 'Ketchup', price: 0.10},
        {name: 'Mustard', price: 0.10}];

    return(
        <section className="banner-block">
            <Price ingredients={ingredients} />
            <Burger/>
            <Count />
        </section>
    );
}

export default Banner;