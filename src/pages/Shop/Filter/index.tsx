import * as C from "./styles"

type Props = {
    setConditionFilter: React.Dispatch<React.SetStateAction<string>>;
    conditionFilter: string;
}

const Filter: React.FC<Props> = ({ setConditionFilter, conditionFilter }) => {

    return (
        <C.Container>
            <C.Row>
                <C.Option onClick={() => setConditionFilter(conditionFilter !== "discount" ? "discount" : "")} isClicked={conditionFilter === "discount" ? true : false}>Ofertas</C.Option>
                <C.Option onClick={() => setConditionFilter(conditionFilter !== "new" ? "new" : "")} isClicked={conditionFilter === "new" ? true : false}>Novos</C.Option>
                <C.Option onClick={() => setConditionFilter(conditionFilter !== "available" ? "available" : "")} isClicked={conditionFilter === "available" ? true : false}>Esgotado</C.Option>
            </C.Row>
        </C.Container>
    )
}

export default Filter;

//Filters:
//Collection, Category
//hasDiscount, isNew, isAvailable(X)
//colorName, size
//Limpar