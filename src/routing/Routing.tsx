import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Page components
import Home from "../pages/Home";

const Routing: React.FC = () => { 
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />}/>
                <Route path={"/shop"} element={<div>Shop Page</div>}/>
                <Route path={"/product"} element={<div>Product Page</div>}/>
                <Route path={"/search"} element={<div>Search Page</div>}/>
                <Route path={"/login"} element={<div>Login Page</div>}/>
                <Route path={"/register"} element={<div>Register Page</div>}/>
                <Route path={"/user"} element={<div>User Page</div>}/>
                <Route path={"/admin"} element={<div>myAdmin Page</div>}/>
                <Route path={"/cart"} element={<div>Cart Page</div>}/>
                <Route path={"/payment"} element={<div>Payment Page</div>}/>
                <Route path={"*"} element={<div>404 Page</div>}/>
            </Routes>
        </Router>
    )
}

export default Routing;