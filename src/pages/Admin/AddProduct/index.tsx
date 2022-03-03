import { useState } from "react";
import { handleAddProduct } from "../../../config/firebase"; 
import { Container, Title, BooleanWrapper, BooleanOption, Span, Button, Wrapper, Error, ContentWrapper } from "./styles";
import Input from "../../../components/Forms/Input";
import Colors from "./Colors";

export interface Color {
    colorName: string;
    colorRgb: string;
    images: string[];
    sizes: string[];
}

const defaultColor = {
    colorName: "",
    colorRgb: "",
    images: [],
    sizes: [],
}

const AddProduct: React.FC = () => {
    const [nameInput, setNameInput] = useState<string>("")
    const [refInput, setRefInput] = useState<string>("")
    const [descriptionInput, setDescriptionInput] = useState<string>("")
    const [categoryInput, setCategoryInput] = useState<string>("")
    const [collectionInput, setCollectionInput] = useState<string>("")
    const [genderInput, setGenderInput] = useState<string[]>([])
    const [hasDiscountInput, setHasDiscountInput] = useState<boolean>(false)
    const [priceInput, setPriceInput] = useState<string>("")
    const [discountInput, setDiscountInput] = useState<string>("")
    const [isAvailableInput, setIsAvailableInput] = useState<boolean>(true)
    const [isNewInput, setIsNewInput] = useState<boolean>(true)
    const [colorsInput, setColorsInput] = useState<Color[]>([defaultColor])
    const [currentColor, setCurrentColor] = useState<number>(0)
    const [thumbInput, setThumbInput] = useState<number[]>([])
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
        setThumbInput([])
    }

    async function handleSubmit() {
        const priceConverted = Number(priceInput)
        const discountConverted = Number(discountInput)

        if(nameInput.length === 0 || refInput.length === 0 || descriptionInput.length === 0 || categoryInput.length === 0 || priceInput.length === 0 || colorsInput.length === 0) {
            return setError("Preencha todos os campos.")
        }

        if(String(priceConverted) === "NaN") {
            return setError("O preço informado não é um número.")
        }

        if(hasDiscountInput === true && (discountInput.length === 0 || String(discountConverted) === "NaN")) {
            return setError("Informe um valor de desconto correto.")
        }

        let err = false
        colorsInput.forEach((color, index) => {
            if(color.colorName.length === 0) {
                err = true
            }
        })
        
        if(err) {
            return setError(`Preencha todas as cores`)
        }

        const productObject = {
            name: nameInput,
            description: descriptionInput,
            ref: refInput,
            imageThumb: colorsInput[thumbInput[0]].images[thumbInput[1]],
            display: true,
            category: categoryInput.toLowerCase(),
            collection: collectionInput.toLowerCase(),
            gender: [...genderInput, "all"],
            colors: colorsInput,
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
        } catch(err) {
            return setError("Não foi possível adicionar o produto.")
        }

    }

    return (
        <Container>
            <Wrapper>
                <ContentWrapper>
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
                        <BooleanOption onClick={() => setHasDiscountInput(true)} status={hasDiscountInput === true ? true : false}>SIM</BooleanOption>
                        <BooleanOption onClick={() => setHasDiscountInput(false)} status={hasDiscountInput === false ? true : false}>NÃO</BooleanOption>
                    </BooleanWrapper>
                    {hasDiscountInput ? <Input span={"Discount Price"} state={discountInput} setState={setDiscountInput}/> : ""}
                    <BooleanWrapper>
                        <Span>É produto novo:</Span> 
                        <BooleanOption onClick={() => setIsNewInput(true)} status={isNewInput === true ? true : false}>SIM</BooleanOption>
                        <BooleanOption onClick={() => setIsNewInput(false)} status={isNewInput === false ? true : false}>NÃO</BooleanOption>
                    </BooleanWrapper>
                    <BooleanWrapper>
                        <Span>Está disponível:</Span> 
                        <BooleanOption onClick={() => setIsAvailableInput(true)} status={isAvailableInput === true ? true : false}>SIM</BooleanOption>
                        <BooleanOption onClick={() => setIsAvailableInput(false)} status={isAvailableInput === false ? true : false}>NÃO</BooleanOption>
                    </BooleanWrapper>
                    <BooleanWrapper>
                        <Span>Generos:</Span> 
                        <BooleanOption onClick={() => handleGenderOptions("men")} status={genderInput.includes("men") ? true : false}>MEN</BooleanOption>
                        <BooleanOption onClick={() => handleGenderOptions("women")} status={genderInput.includes("women") ? true : false}>WOMEN</BooleanOption>
                    </BooleanWrapper>
                </ContentWrapper>
                <ContentWrapper>
                    <Title>Cores</Title>
                    <BooleanWrapper>
                        {colorsInput.map((color, key) => (
                            <BooleanOption key={key} onClick={() => setCurrentColor(key)} status={currentColor === key ? true : false}>Color 0{key + 1}</BooleanOption>
                        ))}
                        <Span onClick={() => setColorsInput([...colorsInput, defaultColor])}>+</Span>
                    </BooleanWrapper>
                    {colorsInput.map((color, key) => (
                        <Colors key={key} index={key} colorsInput={colorsInput} setColorsInput={setColorsInput} setError={setError} currentColor={currentColor} setThumbInput={setThumbInput} thumbInput={thumbInput}/>
                    ))}
                </ContentWrapper>
                <Button onClick={handleSubmit}>Criar Produto</Button>
            </Wrapper>
        </Container>
    )
}

export default AddProduct;