import top from "./../../../assets/img/top.png"
import bottom from "./../../../assets/img/bottom.png"
import Loader from "./Loader";

const Burger = (props) => {
    const {price, order, loading} = props;

    return(
        <div className="burger-block">
        {loading ? (
            <Loader />
        ) : (
            <div>
                <div>
                    <h2>Burger price: <span> {price} </span> $</h2>
                    <button className="checkout-button">Checkout</button>
                </div>
                <div className={"burger-block__burger"}>
                <img src={top} alt="Top" className="bun-top"/>
                {!order.length && (
                    <p>
                    Start by adding ingredients to your burger
                    </p>
                )}
                {order.map((product, idx) => {
                    return (
                    <img
                    key={idx+product}
                    src={require(`./../../../assets/img/${product}.png`)}
                    alt={`${product}`}
                    className="burger-block__ingredient"
                    />
                    )
                })
                }
                <img src={bottom} alt="Top" className="bun-bottom"/>
                </div>
            </div>
            )}
        </div>
    )
}

export default Burger;