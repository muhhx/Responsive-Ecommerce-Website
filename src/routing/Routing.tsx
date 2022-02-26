import { Routes, Route } from "react-router-dom";

//Page components
import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";

const Routing: React.FC = () => { 
    return (
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/shop"} element={<div>Shop Page</div>}/>
            <Route path={"/product"} element={<div>Product Page</div>}/>
            <Route path={"/search"} element={<div>Search Page</div>}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/register"} element={<div>Register Page</div>}/>
            <Route path={"/user"} element={<User />}/>
            <Route path={"/admin"} element={<div>myAdmin Page</div>}/>
            <Route path={"/cart"} element={<div>Cart Page</div>}/>
            <Route path={"/payment"} element={<div>Payment Page</div>}/>
            <Route path={"*"} element={<div>404 Page</div>}/>
        </Routes>
    )
}

export default Routing;