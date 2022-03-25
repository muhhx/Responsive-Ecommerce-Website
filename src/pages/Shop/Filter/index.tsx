import { filterInputs } from "../data"
import { F } from "../../../types/shop";
import * as C from "./styles"

type Props = {
    F: F
}

const Filter: React.FC<Props> = ({ F }) => {
    return (
        <C.Container>
            <C.Row>
                <C.FilterName>Tipo</C.FilterName>
                {filterInputs.categories.map((category, key) => (
                    <C.Option key={key} onClick={() => F.setCategoryFilter(F.categoryFilter !== category ? category : "")} isClicked={F.categoryFilter === category ? true : false}>{category}</C.Option>
                ))}
            </C.Row>
            <C.Row>
                <C.FilterName>Coleção</C.FilterName>
                {filterInputs.collections.map((collection, key) => (
                    <C.Option key={key} onClick={() => F.setCollectionFilter(F.collectionFilter !== collection ? collection : "")} isClicked={F.collectionFilter === collection ? true : false}>{collection}</C.Option>
                ))}
            </C.Row>
            <C.Row>
                <C.FilterName>Filtro</C.FilterName>
                {filterInputs.conditions.map((condition, key) => (
                    <C.Option key={key} onClick={() => F.setConditionFilter(F.conditionFilter !== condition ? condition : "")} isClicked={F.conditionFilter === condition ? true : false}>{condition}</C.Option>  
                ))}
            </C.Row>
            <C.Row>
                <C.FilterName>Price Range</C.FilterName>
                <C.Range type="range" min={0} max={10000} value={F.priceFilter} onChange={(e) => F.setPriceFilter(Number(e.target.value))}/>
            </C.Row>
            <C.Clear onClick={F.clearFilters}>Clear</C.Clear>
        </C.Container>
    )
}

export default Filter;