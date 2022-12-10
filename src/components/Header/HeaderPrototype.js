import LogoPrototype from "./elements/LogoPrototype";
import MenuPrototype from "./elements/MenuPrototype";

function HeaderPrototype() {
    return(
        <header className="container">
            <LogoPrototype />
            <h1>Blog name</h1>
            <MenuPrototype />
        </header>
    );
}

export default HeaderPrototype;