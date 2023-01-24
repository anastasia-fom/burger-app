import Control from "./Control";
import Loader from "./Loader";

const Count = (props) => {
    const {ingredients, changeBurger, quantities, clearBurger, loading} = props;
    return (
        <div className="stuffing-block">
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <h2>Stuffing</h2>
                    <div className="stuffing-block__elements">
                        {ingredients.map((item, index) => (
                            <Control
                                changeBurger={changeBurger}
                                name={item}
                                quantitie={quantities[item]}
                                key={index}
                            />
                        ))
                        }
                    </div>

                    <button onClick={clearBurger} className="clear-button">Clear all</button>
                </div>
            )}
        </div>
    )
}

export default Count;