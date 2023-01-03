import Price from "./elements/Price";
import Burger from "./elements/Burger";
import Count from "./elements/Count";

const Banner = (props) => {
    const {dataIngredient, ingredients , startPrice, quantities , changeBurger, order} = props;

    return(
        <section className="banner-block">
            <Price dataIngredient={dataIngredient}/>
            <Burger price={startPrice}
                    order={order}/>
            <Count ingredients={ingredients}
                   changeBurger={changeBurger}
                   quantities={quantities}/>
        </section>
    );
}

export default Banner;