import { useEffect, useState } from "react"
import Input from "../../../../components/Forms/Input"
import { Container, Title, RgbInput, Span, Wrapper, InputWrapper, InputArea, InputText, InputButton, CustomWrapper, ColorWrapper, SizeSpan, Button } from "./styles"
import ImageHandler from "./ImageHandler"
import { Color } from "../index"

interface Props {
    index: number;
    colorsInput: Color[];
    currentColor: number;
    thumbInput: number[];
    setError: (value: React.SetStateAction<string | null>) => void;
    setThumbInput: (value: React.SetStateAction<number[]>) => void;
    setColorsInput: (value: React.SetStateAction<Color[]>) => void;
}

const Colors: React.FC<Props> = ({ index, colorsInput, currentColor, thumbInput, setColorsInput, setError, setThumbInput }) => {
    const [nameInput, setNameInput] = useState<string>("")
    const [rgbInput, setRgbInput] = useState<string>("")
    const [currentSize, setCurrentSize] = useState<string>("")
    const [sizesInput, setSizesInput] = useState<string[]>([])
    const [imagesInput, setImagesInput] = useState<File[]>([])
    const [imagesUrl, setImagesUrl] = useState<string[]>([])

    function resetInputs() {
        setNameInput("")
        setRgbInput("")
        setCurrentSize("")
        setSizesInput([])
        setImagesInput([])
        setImagesUrl([])
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

    async function handleSave() {
        if(nameInput.length === 0 || rgbInput.length === 0 || sizesInput.length === 0 || imagesInput.length === 0) {
            return setError(`Preencha todos os campos na cor 0${index + 1}`)
        }

        if(thumbInput.length === 0) {
            return setError("Selecione uma imagem para thumb.")
        }

        if(imagesUrl.length !== imagesInput.length) {
            return setError("Por favor, salve todas as imagens antes!")
        }

        const colorObject: Color = {
            colorName: nameInput,
            colorRgb: rgbInput,
            images: imagesUrl,
            sizes: sizesInput
        }

        const newArr = colorsInput
        newArr[index] = colorObject
        setColorsInput(newArr)
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
                <Span>Images (clique para selecionar thumb):</Span>
            </InputWrapper>
            <ImageHandler index={index} imagesInput={imagesInput} setImagesInput={setImagesInput} setError={setError} setThumbInput={setThumbInput} thumbInput={thumbInput} setImagesUrl={setImagesUrl} imagesUrl={imagesUrl}/>
            <InputWrapper>
                <Button onClick={handleSave}>Salvar</Button>
                <Button onClick={handleDelete}>Deletar</Button>
            </InputWrapper>
        </Container>
    )
}

export default Colors;