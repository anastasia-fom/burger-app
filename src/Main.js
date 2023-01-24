import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import FAQ from "./pages/FAQ/FAQ";
import Contacts from "./pages/Contacts/Contacts";

const Main = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/burger-app'} element={<Home />}/>
                <Route path={'/home'} element={<Home />}/>
                <Route path={'/orders'} element={<Orders/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
                <Route path={'/faq'} element={<FAQ/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Main;