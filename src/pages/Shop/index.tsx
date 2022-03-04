import { useState, useEffect } from "react";
import { useProduct } from "../../context/productContext";

import { F } from "../../types/shop";
import { Product } from "../../types/product";

import { filterInputs } from "./data";
import { filterProducts } from "../../services/filter";

import Item from "./Item";
import Filter from "./Filter";
import * as C from "./styles";

const Shop: React.FC = () => {
    const { products } = useProduct()
    const [filterOpen, setFilterOpen] = useState<boolean>(false)
    const [genderQuantity, setGenderQuantity] = useState<number[]>([0, 0, 0])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [genderFilter, setGenderFilter] = useState<string>("all")
    const [categoryFilter, setCategoryFilter] = useState<string>("")
    const [collectionFilter, setCollectionFilter] = useState<string>("")
    const [priceFilter, setPriceFilter] = useState<number>(1000)
    const [conditionFilter, setConditionFilter] = useState<string>("")

    function clearFilters() {
        setGenderFilter("all")
        setConditionFilter("")
        setPriceFilter(1000)
        setCategoryFilter("")
        setCollectionFilter("")
    }

    const F: F = {
        genderFilter,
        conditionFilter,
        priceFilter,
        categoryFilter,
        collectionFilter,
        setGenderFilter,
        setConditionFilter,
        setPriceFilter,
        setCategoryFilter,
        setCollectionFilter,
        clearFilters
    }

    useEffect(() => {
        setFilteredProducts(products)
        const allGender = products.filter(product => {if(product.gender.includes("all")) return product})
        const menGender = products.filter(product => {if(product.gender.includes("men")) return product})
        const womenGender = products.filter(product => {if(product.gender.includes("women")) return product})
        setGenderQuantity([allGender.length, menGender.length, womenGender.length])
    }, [products])


    return (
        <C.Section>
            <C.Container>
                <C.Header>
                    <C.Title>Shop</C.Title>
                    <C.Control>
                        <C.Wrapper>
                            {filterInputs.genders.map((gender, i) => (
                                <C.GenderWrapper onClick={() => setGenderFilter(gender)} key={i}>
                                    <C.Option isClicked={genderFilter === gender ? true : false}>{gender}</C.Option>
                                    <C.Quantity>{genderQuantity[i]}</C.Quantity>
                                </C.GenderWrapper>
                            ))}
                        </C.Wrapper>
                        <C.Wrapper>
                            <C.Option onClick={() => setFilterOpen(filterOpen ? false : true)} isClicked={filterOpen ? true : false}>Filter</C.Option>
                        </C.Wrapper>
                    </C.Control>
                </C.Header>
                {filterOpen ? <Filter F={F}/> : ''}
                <C.Products>
                    {filteredProducts.length === 0 ? <div>Nenhum produto encontrado</div> : 
                    filterProducts({filteredProducts, F}).map((product, i) => (
                        <Item key={i} product={product}/>
                    ))}
                </C.Products>
            </C.Container>
        </C.Section>
    )
}

export default Shop;