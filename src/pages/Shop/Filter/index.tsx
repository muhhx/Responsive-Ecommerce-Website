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
                {filterInputs.categories.map(category => (
                    <C.Option onClick={() => F.setCategoryFilter(F.categoryFilter !== category ? category : "")} isClicked={F.categoryFilter === category ? true : false}>{category}</C.Option>
                ))}
            </C.Row>
            <C.Row>
                {filterInputs.collections.map(collection => (
                    <C.Option onClick={() => F.setCollectionFilter(F.collectionFilter !== collection ? collection : "")} isClicked={F.collectionFilter === collection ? true : false}>{collection}</C.Option>
                ))}
            </C.Row>
            <C.Row>
                {filterInputs.conditions.map(condition => (
                    <C.Option onClick={() => F.setConditionFilter(F.conditionFilter !== condition ? condition : "")} isClicked={F.conditionFilter === condition ? true : false}>{condition}</C.Option>  
                ))}
            </C.Row>
            <C.Row>
                <span>max: R${F.priceFilter}</span>
                <C.Range type="range" min={0} max={1000} value={F.priceFilter} onChange={(e) => F.setPriceFilter(Number(e.target.value))}/>
            </C.Row>
            <C.Option onClick={F.clearFilters}>Clear</C.Option>
        </C.Container>
    )
}

export default Filter;