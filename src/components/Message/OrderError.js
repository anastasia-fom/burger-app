const OrderError = ({close}) => {
    return(
        <div className="modal__wrapper">
            <div className="modal">
                <div className="block__close-button">
                    <button
                        className="close-button"
                        onClick={close}
                    >
                        Close
                    </button>
                </div>

                <h2>Something went wrong!</h2>
            </div>
        </div>
    )
}

export default OrderError;