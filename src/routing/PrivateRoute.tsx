import { useUser } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
    const { currentUser } = useUser()
    return currentUser ? <Outlet /> : <Navigate to={"/login"}/>
}

export default PrivateRoute;
