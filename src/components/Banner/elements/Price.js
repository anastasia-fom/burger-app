import Ingredient from "./Ingredient";

const Price = (props) => {
    const data = props.dataIngredient;

    return (
        <div className="price-block">
            <h2>Our prices</h2>

            <div className="price-block__elements">
                {
                data.map((item, index) => (
                    <Ingredient
                        name={item.name}
                        price={item.price}
                        key={index}/>
                    )
                )
                }
            </div>
        </div>
    )
}

export default Price;