import {NavLink} from "react-router-dom";
function Menu() {
    const menuItems = ['Home', 'Orders', 'Contacts', 'FAQ'];

    return(
        <nav className="menu">
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li key={item+index}>
                            <NavLink
                                to={"/"+item.toLowerCase()}
                               className={({ isActive }) => (isActive ? "active menu__element" : "menu__element")}>
                                {item}
                            </NavLink>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    );
}

export default Menu;