import Header from "../../components/Header/Header";
import React from "react";

const FAQ = () => {
    return(
        <>
            <Header />
            <main>
                <div>
                    <ul className="delivery">
                        <li>
                            <h2>What is the minimum order amount?</h2>
                            <p>The minimum order amount is  3.95 $.</p>
                        </li>
                        <li>
                            <h2>How long will it take for the order to be delivered?</h2>
                            <p>Delivery takes place within 1 hour, the minimum time is 20 minutes.</p>
                        </li>
                        <li>
                            <h2>How long will it take for the order to be delivered?</h2>
                            <p>Delivery takes place within 1 hour, the minimum time is 20 minutes.</p>
                        </li>
                        <li>
                            <h2>How much does delivery cost?</h2>
                            <p>Our delivery is 0.45.</p>
                        </li>
                        <li>
                            <h2>What should I do if my order was not delivered on time or I am not satisfied with its quality?</h2>
                            <p>If the order does not arrive within the announced time, we will refund you 10% of the order value.
                                If the order does not satisfy you, call us and explain the situation.
                                Depending on the situation, we will refund part of the amount to you.</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default FAQ;