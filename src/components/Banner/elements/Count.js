import Control from "./Control";

const Count = (props) => {
    const {ingredients, changeBurger, quantities  } = props;
    return (
        <div className="stuffing-block">
            <h2>Stuffing</h2>

            <div className="stuffing-block__elements">
                {
                    ingredients.map((item, index) => (
                        <Control
                            changeBurger={changeBurger}
                            name={item}
                            quantitie={quantities[item]}
                            key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Count;