import { useState } from "react";
import { useUser } from "../../context/userContext";

import Favorites from "./Favorites";
import Account from "./Account";
import * as C from "./styles";

const User: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0)
    const { currentUser, currentUserData } = useUser()

    return (
        <C.Section>
            <C.Container>
                <C.Header>
                    <C.Title>User</C.Title>
                    <C.Options>
                        <C.Option onClick={() => setCurrentPage(0)} isSelected={currentPage === 0 ? true : false}>Account</C.Option>
                        <C.Option onClick={() => setCurrentPage(1)} isSelected={currentPage === 1 ? true : false}>Favorites</C.Option>
                        <C.Option onClick={() => setCurrentPage(2)} isSelected={currentPage === 2 ? true : false}>Pedidos</C.Option>
                    </C.Options>
                </C.Header>
                {currentPage === 0 ? <Account currentUserData={currentUserData}/> : ''}
                {currentPage === 1 ? <Favorites currentUserData={currentUserData}/> : ''}
                {currentPage === 2 ? <div>op3</div> : ''}
            </C.Container>
        </C.Section>
    )
}

export default User;