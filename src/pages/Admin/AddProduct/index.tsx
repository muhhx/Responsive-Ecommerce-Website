import { useState } from "react";
import { handleAddProduct } from "../../../config/firebase"; 
import { Container, Title, BooleanWrapper, BooleanOption, Span, Button, Wrapper, Error } from "./styles";
import Input from "../../../components/Forms/Input"

interface Color {
    colorName: string;
    colorRgb: string;
    images: string[];
    sizes: string[];
}

const AddProduct: React.FC = () => {
    const [nameInput, setNameInput] = useState<string>("")
    const [refInput, setRefInput] = useState<string>("")
    const [descriptionInput, setDescriptionInput] = useState<string>("")
    const [categoryInput, setCategoryInput] = useState<string>("")
    const [collectionInput, setCollectionInput] = useState<string>("")
    const [genderInput, setGenderInput] = useState<string[]>([])
    const [hasDiscountInput, setHasDiscountInput] = useState<boolean>(false)
    const [priceInput, setPriceInput] = useState<string>("") //Converter pra number
    const [discountInput, setDiscountInput] = useState<string>("") //Converter pra number
    const [isAvailableInput, setIsAvailableInput] = useState<boolean>(true)
    const [isNewInput, setIsNewInput] = useState<boolean>(true)
    const [colorsInput, setColorsInput] = useState<Color[]>([])
    const [error, setError] = useState<string | null>(null)

    function handleGenderOptions(value: string) {
        if(genderInput.includes(value)) {
            setGenderInput(genderInput.filter(gender => gender !== value))
        } else {
            setGenderInput([...genderInput, value])
        }
    }

    function resetInputs() {
        setNameInput("")
        setRefInput("")
        setDescriptionInput("")
        setCategoryInput("")
        setCollectionInput("")
        setGenderInput([])
        setHasDiscountInput(false)
        setPriceInput("")
        setDiscountInput("")
        setIsAvailableInput(true)
        setIsNewInput(true)
    }

    async function handleSubmit() {
        const priceConverted = Number(priceInput)
        const discountConverted = Number(discountInput)

        if(nameInput.length === 0 || refInput.length === 0 || descriptionInput.length === 0 || categoryInput.length === 0 || priceInput.length === 0) {
            return setError("Preencha todos os campos.")
        }

        if(String(priceConverted) === "NaN") {
            return setError("O preço informado não é um número.")
        }

        if(hasDiscountInput === true && (discountInput.length === 0 || String(discountConverted) === "NaN")) {
            return setError("Informe um valor de desconto correto.")
        }

        const productObject = {
            name: nameInput,
            description: descriptionInput,
            ref: refInput,
            display: true,
            category: categoryInput,
            collection: collectionInput,
            gender: genderInput,
            pricing: {
                price: priceConverted,
                discountPrice: hasDiscountInput === true ? discountConverted : 0
            },
            conditions: {
                hasDiscount: hasDiscountInput,
                isAvailable: isAvailableInput,
                isNew: isNewInput
            }
        }
        
        try {
            setError(null)
            await handleAddProduct("products", productObject)
            resetInputs()
            setError("Produto adicionado com sucesso!")
        } catch {
            return setError("Não foi possível adicionar o produto.")
        }

    }

    return (
        <Container>
            <Wrapper>
                <Title>Informações básicas</Title>
                {error !== null ? <Error>{error}</Error> : ""}
                <Input span={"Name"} state={nameInput} setState={setNameInput}/>
                <Input span={"Product reference"} state={refInput} setState={setRefInput}/>
                <Input span={"Description"} state={descriptionInput} setState={setDescriptionInput}/>
                <Input span={"Category"} state={categoryInput} setState={setCategoryInput}/>
                <Input span={"Collection"} state={collectionInput} setState={setCollectionInput}/>
                <Input span={"Price (numero inteiro)"} state={priceInput} setState={setPriceInput}/>
                <BooleanWrapper>
                    <Span>Possui disconto:</Span> 
                    <BooleanOption onClick={() => setHasDiscountInput(true)} status={hasDiscountInput === true ? true : false}>Sim</BooleanOption>
                    <BooleanOption onClick={() => setHasDiscountInput(false)} status={hasDiscountInput === false ? true : false}>Não</BooleanOption>
                </BooleanWrapper>
                {hasDiscountInput ? <Input span={"Discount Price"} state={discountInput} setState={setDiscountInput}/> : ""}
                <BooleanWrapper>
                    <Span>É produto novo:</Span> 
                    <BooleanOption onClick={() => setIsNewInput(true)} status={isNewInput === true ? true : false}>Sim</BooleanOption>
                    <BooleanOption onClick={() => setIsNewInput(false)} status={isNewInput === false ? true : false}>Não</BooleanOption>
                </BooleanWrapper>
                <BooleanWrapper>
                    <Span>Está disponível:</Span> 
                    <BooleanOption onClick={() => setIsAvailableInput(true)} status={isAvailableInput === true ? true : false}>Sim</BooleanOption>
                    <BooleanOption onClick={() => setIsAvailableInput(false)} status={isAvailableInput === false ? true : false}>Não</BooleanOption>
                </BooleanWrapper>
                <BooleanWrapper>
                    <Span>Generos:</Span> 
                    <BooleanOption onClick={() => handleGenderOptions("men")} status={genderInput.includes("men") ? true : false}>Homem</BooleanOption>
                    <BooleanOption onClick={() => handleGenderOptions("woman")} status={genderInput.includes("woman") ? true : false}>Mulher</BooleanOption>
                </BooleanWrapper>
                <div>Colors</div>
                <Button onClick={handleSubmit}>Criar Produto</Button>
            </Wrapper>
        </Container>
    )
}

export default AddProduct;