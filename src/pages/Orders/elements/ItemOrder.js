const ItemOrder = ({name, phone, address, email, products, price}) => {
    const itemsProduct = Object.entries(products) ;

    return (
        <div className="orders-item">
            <div className="orders-item__header">
                <p><span className="orders-item__header-name">{name}</span></p>
                <p><span className="orders-item__header-price">Price:</span> {price} $</p>
            </div>

            <div className="orders-item__details">
                <div className="orders-item__details-contacts">
                    <h3>Contacts</h3>
                    <p><span>Phone:</span> {phone}</p>
                    <p><span>Address:</span> {address}</p>
                    <p><span>Email:</span> {email}</p>
                </div>

                <div className="orders-item__details-order">
                    <h3>Order</h3>
                    <div>
                        {itemsProduct.map((item) => {
                            return (
                                <p key={Math.random() * 2000}>{`${item.slice(0, -1)} ${item.slice(-1)}`}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemOrder;