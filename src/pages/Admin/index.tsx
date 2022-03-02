import { useState } from "react";
import { Container, Section, Header, Title, Options, Button } from "./styles";
import AddProduct from "./AddProduct"
import EditProduct from "./EditProduct"

const Admin: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0)

    return (
        <Section>
            <Container>
                <Header>
                    <Title>ADMIN PANEL</Title>
                    <Options>
                        <Button onClick={() => setCurrentPage(0)} isSelected={currentPage === 0 ? true : false}>Editar Produtos</Button>
                        <Button onClick={() => setCurrentPage(1)} isSelected={currentPage === 1 ? true : false}>Adicionar Produtos</Button>
                        <Button onClick={() => setCurrentPage(2)} isSelected={currentPage === 2 ? true : false}>Editar Coleções</Button>
                        <Button onClick={() => setCurrentPage(3)} isSelected={currentPage === 3 ? true : false}>Adicionar Coleções</Button>
                        <Button onClick={() => setCurrentPage(4)} isSelected={currentPage === 4 ? true : false}>Pedidos</Button>
                    </Options>
                </Header>
                {currentPage === 0 ? <EditProduct /> : ""}
                {currentPage === 1 ? <AddProduct /> : ""}
                {currentPage === 2 ? <div>Editar coleções</div> : ""}
                {currentPage === 3 ? <div>Adicionar coleções</div> : ""}
                {currentPage === 4 ? <div>Controlar pedidos</div> : ""}
            </Container>
        </Section>
    )
}

export default Admin;