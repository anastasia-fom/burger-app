import React, {useEffect, useState} from "react";
import {getOrders} from "../../utils/api/API";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Loader from "../../components/Banner/elements/Loader";
import ItemOrder from "./elements/ItemOrder";

const Orders = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async () => {
            setLoading(true);
            try {
                const {data} = await getOrders();
                setLoading(false);
                setOrders(data)
            } catch (error) {
                console.error(error);
            }
        }
        loadOrders();
    }, []);

    return(
        <>
            <Header />
            <main className="orders-block">
                { loading ? (
                    <Loader />
                ) : (
                    orders.map((order, index)=> {
                        return (
                            <ItemOrder
                                key={order._id + index}
                                name={order.orderName}
                                phone={order.orderPhone}
                                address={order.orderAddress}
                                email={order.orderEmail}
                                products={order.orderProducts}
                                price={order.orderPrice}
                            />
                        )
                    })
                    )
                }
            </main>
        </>
    )
}

export default Orders;