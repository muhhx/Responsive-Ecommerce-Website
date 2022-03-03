import { useState, useEffect } from "react";
import { useProduct } from "../../context/productContext";
import { Section, Container, Header, Title, Control, GenderWrapper, Option, Quantity, Wrapper, Products } from "./styles";
import Filter from "./Filter";
import Item from "./Item";
import { Product } from "../../types/product";

const Shop: React.FC = () => {
    const { products } = useProduct()

    const [filterOpen, setFilterOpen] = useState<boolean>(false)
    const [genderQuantity, setGenderQuantity] = useState<number[]>([0, 0, 0])

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [genderFilter, setGenderFilter] = useState<string>("all")
    const [conditionFilter, setConditionFilter] = useState<string>("")

    useEffect(() => {
        setFilteredProducts(products)
        const allGender = products.filter(product => {
            if(product.gender.includes("all")) return product
        })
        const menGender = products.filter(product => {
            if(product.gender.includes("men")) return product
        })
        const womenGender = products.filter(product => {
            if(product.gender.includes("women")) return product
        })
        setGenderQuantity([allGender.length, menGender.length, womenGender.length])
    }, [products])


    return (
        <Section>
            <Container>
                <Header>
                    <Title>Shop</Title>
                    <Control>
                        <Wrapper>
                            <GenderWrapper onClick={() => setGenderFilter("all")}>
                                <Option isClicked={genderFilter === "all" ? true : false}>All</Option>
                                <Quantity>{genderQuantity[0]}</Quantity>
                            </GenderWrapper>
                            <GenderWrapper onClick={() => setGenderFilter("men")}>
                                <Option isClicked={genderFilter === "men" ? true : false}>Men</Option>
                                <Quantity>{genderQuantity[1]}</Quantity>
                            </GenderWrapper>
                            <GenderWrapper onClick={() => setGenderFilter("women")}>
                                <Option isClicked={genderFilter === "women" ? true : false}>Women</Option>
                                <Quantity>{genderQuantity[2]}</Quantity>
                            </GenderWrapper>
                        </Wrapper>
                        <Wrapper>
                            <Option onClick={() => setFilterOpen(filterOpen ? false : true)} isClicked={filterOpen ? true : false}>Filter</Option>
                        </Wrapper>
                    </Control>
                </Header>
                {filterOpen ? <Filter setConditionFilter={setConditionFilter} conditionFilter={conditionFilter}/> : ''}
                <Products>
                    {filteredProducts.length === 0 ? <div>Nenhum produto encontrado</div> : 
                    filteredProducts.filter(product => {
                        if(product.gender.includes(genderFilter)) {
                            return product
                        }
                    }).filter(product => {
                        if(conditionFilter === "") {
                            return product
                        } else if(conditionFilter === "discount" && product.conditions.hasDiscount) {
                            return product
                        } else if(conditionFilter === "new" && product.conditions.isNew) {
                            return product
                        } else if(conditionFilter === "available" && !product.conditions.isAvailable) {
                            return product
                        }
                    }).map((product, i) => (
                        <Item key={i} product={product}/>
                    ))}
                </Products>
            </Container>
        </Section>
    )
}

export default Shop;