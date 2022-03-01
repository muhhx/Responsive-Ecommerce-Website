import { useState } from "react"
import Input from "../../../../components/Forms/Input"
import { Container, Title, RgbInput, Span, Wrapper, InputWrapper, InputArea, InputText, InputButton, CustomWrapper, ColorWrapper, SizeSpan, Button } from "./styles"
import { Color } from "../index"

interface Props {
    index: number;
    colorsInput: Color[];
    setColorsInput: (value: React.SetStateAction<Color[]>) => void;
    setError: (value: React.SetStateAction<string | null>) => void;
    currentColor: number;
}

const Colors: React.FC<Props> = ({ index, colorsInput, currentColor, setColorsInput, setError }) => {
    const [nameInput, setNameInput] = useState<string>("")
    const [rgbInput, setRgbInput] = useState<string>("")
    const [currentSize, setCurrentSize] = useState<string>("")
    const [sizesInput, setSizesInput] = useState<string[]>([])

    function resetInputs() {
        setNameInput("")
        setRgbInput("")
        setCurrentSize("")
        setSizesInput([])
    }

    function handleRGBChange(e: string) {
        const r = parseInt(e.substr(1,2), 16)
        const g = parseInt(e.substr(3,2), 16)
        const b = parseInt(e.substr(5,2), 16)
        setRgbInput(`rgb(${r},${g},${b})`)
    }

    function handleAddSize() {
        if(currentSize.length === 0) {
            return setError(`Informe um tamanho válido para a cor 0${index + 1}.`)
        }

        if(sizesInput.includes(currentSize.toUpperCase())) {
            return setError(`Tamanho já informado na cor 0${index + 1}.`)
        }

        setSizesInput([...sizesInput, currentSize.toUpperCase()])
        setCurrentSize("")
    }

    function handleDeleteSize(index: number) {
        setSizesInput(sizesInput.filter((size, i) => index !== i))
    }

    function handleSave() {
        if(nameInput.length === 0 || rgbInput.length === 0 || sizesInput.length === 0) {
            return setError(`Preencha todos os campos na cor 0${index + 1}`)
        }

        const colorObject: Color = {
            colorName: nameInput,
            colorRgb: rgbInput,
            images: [],
            sizes: sizesInput
        }

        const newArr = colorsInput.filter((color, i) => i !== index )
        setColorsInput([...newArr, colorObject])
        resetInputs()
        setError(`Cor 0${index + 1} atualizada com sucesso!`)
    }

    function handleDelete() {
        const newArr = colorsInput.filter((color, i) => i !== index )
        setColorsInput(newArr)
        setError(`Cor 0${index + 1} deletada com sucesso!`)
    }
    
    return (
        <Container isShown={currentColor === index ? true : false}>
            <Title>Cor 0{index + 1}</Title>
            <CustomWrapper>
                <Input span={"Color name"} state={nameInput} setState={setNameInput}/>
                <ColorWrapper>
                    <Span>RGB Color:</Span>
                    <RgbInput type="color" onChange={(e) => handleRGBChange(e.target.value)}/>
                </ColorWrapper>
            </CustomWrapper>
            <Wrapper>
                <Span>Sizes (clique para deletar):</Span>
                {sizesInput.map((size, index) => <SizeSpan onClick={() => handleDeleteSize(index)} key={index}>{size}</SizeSpan>)}
            </Wrapper>
            <InputWrapper>
                <InputArea>
                    <InputText type="text" onChange={(e) => setCurrentSize(e.target.value)} value={currentSize}/>
                </InputArea>
                <InputButton onClick={handleAddSize}>Adicionar Size</InputButton>
            </InputWrapper>
            <InputWrapper>
                <Button onClick={handleSave}>Salvar</Button>
                <Button onClick={handleDelete}>Deletar</Button>
            </InputWrapper>
        </Container>
    )
}

export default Colors;