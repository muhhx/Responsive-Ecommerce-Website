import { Routes, Route } from "react-router-dom";

//Private Routes
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import LoggedRoute from "./LoggedRoute";

//Page components
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Item from "../pages/Item";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import User from "../pages/User";
import Admin from "../pages/Admin";

const Routing: React.FC = () => { 
    return (
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/shop"} element={<Shop />}/>
            <Route path={"/product/:id"} element={<Item />}/>
            <Route path={"/cart"} element={<Cart />}/>
            <Route path={"/payment"} element={<Payment />}/>
            <Route path={"*"} element={<div>404 Page</div>}/>

            <Route element={<LoggedRoute />}>
                <Route path={"/login"} element={<Login />}/>
            </Route>
            <Route element={<LoggedRoute />}>
                <Route path={"/register"} element={<Register />}/>
            </Route>
            <Route element={<LoggedRoute />}>
                <Route path={"/reset"} element={<Reset />}/>
            </Route>

            <Route element={<PrivateRoute />}>
                <Route path={"/user"} element={<User />}/>
            </Route>

            <Route element={<AdminRoute />}>
                <Route path={"/admin"} element={<Admin />}/>
            </Route>
        </Routes>
    )
}

export default Routing;