const Ingredient = (props) => {
    const {name, price} = props;
    return (
        <p>{name}: <span>{price}</span> $</p>
    )
}

export default Ingredient;