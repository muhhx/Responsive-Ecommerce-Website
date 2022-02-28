import { useUser } from "../context/userContext"
import { Outlet, Navigate } from "react-router-dom"

const LoggedRoute: React.FC = () => {
    const { currentUser } = useUser()
    return !currentUser ? <Outlet /> : <Navigate to={"/user"}/>
}

export default LoggedRoute;