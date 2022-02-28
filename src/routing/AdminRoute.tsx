import { Outlet, Navigate } from "react-router-dom"
import { useUser } from "../context/userContext"

const AdminRoute: React.FC = () => {
    const { currentUserData } = useUser()
    return currentUserData?.userRole === "admin" ? <Outlet /> : <Navigate to={"/"}/>
}

export default AdminRoute;