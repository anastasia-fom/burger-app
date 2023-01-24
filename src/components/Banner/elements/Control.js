const Control = (props) => {
    const {name, quantitie , changeBurger} = props;
    return(
        <div className="stuffing-block__element">
            <div className="stuffing-block__buttons" onClick={changeBurger}>
                <button className="btn-minus" data-action="decrement" data-ingredient={name}>-</button>
                <p>{quantitie}</p>
                <button className="btn-plus" data-action="increment" data-ingredient={name}>+</button>
            </div>
            <img
                src={require(`./../../../assets/img/${name}.png`)}
                alt={`${name}`}
            />
        </div>
    );
}

export default Control;