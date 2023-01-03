import Logo from "./elements/Logo"
import Menu from "./elements/Menu"

const Header = () => {
    return(
        <header className="container">
            <Logo/>
            <h1>Burger Builder App</h1>
            <Menu/>
        </header>
    );
}

export default Header;