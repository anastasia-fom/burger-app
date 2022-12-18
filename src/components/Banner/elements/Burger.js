import top from "./../../../assets/img/top.png"
import bottom from "./../../../assets/img/bottom.png"

const Burger = () => {
    return(
        <div className="burger-block">
            <div>
                <h2>Burger price: <span>1.00</span> $</h2>
                <button className="checkout-button">Checkout</button>
            </div>
            <div>
                <img src={top} alt="Top" className="bun-top"/>
                <p>Please, start by adding products...</p>
                <img src={bottom} alt="Top" className="bun-bottom"/>
            </div>
        </div>
    )
}

export default Burger;