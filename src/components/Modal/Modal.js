import {Formik, Form, ErrorMessage, Field} from "formik";
import { SignupSchema } from "../../utils/validation/validationSchema";
import {validationRules} from "../../utils/validation/validations";
import {useState} from "react";
import {createOrder} from "../../utils/api/API";
import OrderSuccess from "../Message/OrderSuccess";
import Loader from "../Banner/elements/Loader";
import OrderError from "../Message/OrderError";

const Modal = ({modalActive, close, orderPrice, quantities, clearBurger}) => {
    const [loading, setLoading] = useState(false);
    const [orderCreateStatus, setOrderCreateStatus] = useState(false);
    const [sendOrder, setSendOrder] = useState(false);

    const burgerIngredients = Object.entries(quantities).filter((product) => product[1] > 0);

    const handleOrder = async (data) => {
        const {
            name: orderName,
            phone: orderPhone,
            email: orderEmail,
            address: orderAddress,
        } = data;

        const orderData = {
            orderName,
            orderPhone,
            orderEmail,
            orderAddress,
            orderProducts: Object.fromEntries(burgerIngredients),
            orderPrice,
        };

        try {
            setLoading(true);
            await createOrder(orderData);
            setLoading(false);
            setOrderCreateStatus(true);
            setSendOrder(true);
            clearBurger();
        } catch (error) {
            setLoading(false);
            console.error(error);
            setOrderCreateStatus(false);
            setSendOrder(false);
            clearBurger();
        }
    };

    return(
        <div className="modal__wrapper">
            {orderCreateStatus ? (
                 loading ? (
                    <Loader/>
                    ) : (
                              sendOrder ? (
                                 <OrderSuccess
                                     close={close}
                                 />

                                 ) : (
                                         <OrderError
                                             close={close}
                                         />
                                 )
                    )
            ) : (
                <div className={modalActive ? "active-modal" : ""}>
                    <div className="modal">
                        <div>
                            <div className="modal__order">
                                <h2>Order</h2>
                                <ul>
                                    {burgerIngredients.map((ingredient, index) => {
                                        return(
                                            <li
                                                key={index}
                                            >
                                                <p>{`${ingredient[0]} : ${ingredient[1]}`}</p>
                                                <div>
                                                    <img
                                                        src={require(`./../../assets/img/${ingredient[0]}.png`)}
                                                        alt={ingredient[0]}
                                                    />
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="modal__form">
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        phone: "",
                                        address: "",
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={(values) => handleOrder(values)}
                                >
                                    {({handleSubmit }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <label>
                                                <Field
                                                    validate={validationRules.validateName}
                                                    type="text"
                                                    name="name"
                                                    placeholder="name"
                                                />
                                            </label>
                                            <ErrorMessage name="name" />
                                            <br/>
                                            <label>
                                                <Field
                                                    validate={validationRules.validateEmail}
                                                    type="email"
                                                    name="email"
                                                    placeholder="email"
                                                />
                                            </label>
                                            <ErrorMessage name="email" />
                                            <br/>
                                            <label>
                                                <Field
                                                    validate={validationRules.validatePhone}
                                                    type="text"
                                                    name="phone"
                                                    placeholder="number"
                                                />
                                            </label>
                                            <ErrorMessage name="phone" />
                                            <br/>
                                            <label>
                                                <Field
                                                    validate={validationRules.validateAddress}
                                                    type="text"
                                                    name="address"
                                                    placeholder="address"
                                                />
                                            </label>
                                            <ErrorMessage name="address" />
                                            <br/>
                                            <div>

                                                <h2 className="modal__total-price">Total price: <span> {orderPrice} </span> $</h2>
                                                <br/>
                                                <div className="modal__buttons">
                                                    <button
                                                        type="submit"
                                                        className="cancel-button"
                                                        onClick={close}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button type="submit" className="submit-button">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            )
            }
        </div>

    );
}

export default Modal;