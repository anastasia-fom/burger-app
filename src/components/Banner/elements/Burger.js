import top from "./../../../assets/img/top.png"
import bottom from "./../../../assets/img/bottom.png"

const Burger = (props) => {
    const {price, order} = props;

    return(
        <div className="burger-block">
            <div>
                <h2>Burger price: <span>{price}</span> $</h2>
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
                        <img key={idx}
                             src={require(`./../../../assets/img/${product}.png`)}
                             alt={`${product}`}
                            className="burger-block__ingredient"/>
                    )
                })
                }
                <img src={bottom} alt="Top" className="bun-bottom"/>
            </div>
        </div>
    )
}

export default Burger;