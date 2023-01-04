import Price from "./elements/Price";
import Burger from "./elements/Burger";
import Count from "./elements/Count";

const Banner = (props) => {
    const {dataIngredient, ingredients , startPrice, quantities , changeBurger, order, clearBurger, loading} = props;

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