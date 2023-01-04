import Ingredient from "./Ingredient";
import Loader from "./Loader";

const Price = (props) => {
    const {dataIngredient, loading} = props;

    return (
        <div className="price-block">
            {loading ? (
                <Loader />
                ) : (
                    <div>
                        <h2>Our prices</h2>

                        <div className="price-block__elements">
                            {
                                dataIngredient.map((item, index) => (
                                        <Ingredient
                                            name={item.name}
                                            price={item.price}
                                            key={index}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
            )}
        </div>
    )
}

export default Price;