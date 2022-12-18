import Ingredient from "./Ingredient";

const Price = (props) => {
    const ingredients = props.ingredients;

    return (
        <div className="price-block">
            <h2>Our prices</h2>

            <div className="price-block__elements">
                {
                ingredients.map((item, index) => (
                    <Ingredient name={item.name} price={item.price} key={index}/>
                    )
                )
                }
            </div>
        </div>
    )
}

export default Price;