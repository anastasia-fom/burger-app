import top from "./../../../assets/img/top.png"
import bottom from "./../../../assets/img/bottom.png"
import Loader from "./Loader";
import {useState} from "react";
import Modal from "../../Modal/Modal";

const Burger = ({
   price,
   order,
   loading,
   quantities,
   clearBurger
}) => {

    const [modal, setModal] = useState(false);

    const notActiveCheckout = () => {
        setModal(false);
    };
    const activeCheckout = async () => {
        setModal(true);
    };

    return(
        <div className="burger-block">
        {loading ? (
            <Loader />
        ) : (
            <div>
                {modal && (
                <Modal
                    modalActive={modal}
                    orderSummary={order}
                    orderPrice={price}
                    open={modal}
                    close={notActiveCheckout}
                    quantities={quantities}
                    clearBurger = {clearBurger}
                />
                )}
                <div>
                    <h2>Burger price: <span> {price} </span> $</h2>
                    <button className="checkout-button" onClick={+price > 1 ? activeCheckout : undefined}>Checkout</button>
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