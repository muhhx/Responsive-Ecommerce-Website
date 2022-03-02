import React, { useState } from "react";
import { Wrapper, Info, Span, Options, Option, InputLabel, InputForm } from "./styles";
import { insertImage } from "../../../../../services/storage"

interface Props {
    index: number;
    imagesInput: File[];
    thumbInput: number[];
    imagesUrl: string[];
    setError: (value: React.SetStateAction<string | null>) => void;
    setThumbInput: (value: React.SetStateAction<number[]>) => void;
    setImagesInput: (value: React.SetStateAction<File[]>) => void;
    setImagesUrl: (value: React.SetStateAction<string[]>) => void;
}

const ImageHandler: React.FC<Props> = ({ index, imagesInput, thumbInput, imagesUrl, setImagesInput, setError, setThumbInput, setImagesUrl }) => {
    const [sending, setSending] = useState<string>("")
    const types = ["image/png", "image/jpeg", "image/jpg"]

    function handleImageThumb(indexPosition: number) {
        setThumbInput([index, indexPosition])
    }

    function handleFile(e: any) {
        const selected = e.target.files[0]

        if(selected && types.includes(selected.type) && selected.size > 0) {
            setImagesInput([...imagesInput, selected])
            setError(null)
        } else {
            setError("Faça o upload de uma imagem válida! (png/jpeg)")
        }
    }

    function deleteFile(indexPosition: number) {
        setImagesInput(imagesInput.filter((image, i) => i !== indexPosition))
    }

    async function handleSaveStorage(image: File) {
        setSending("Enviando")
        try {
            const resultUrl = await insertImage(image)
            setImagesUrl([...imagesUrl, resultUrl])
        } catch {
            setError("Não foi possível enviar sua imagem")
        }
        setSending("")
    }

    return (
        <Wrapper>
            {imagesInput.map((image, indexPosition) => (
                <Info key={indexPosition}>
                    <Option onClick={() => deleteFile(indexPosition)}>DEL</Option>
                    <Option onClick={() => handleSaveStorage(image)}>SAVE {sending}</Option>
                    <Span onClick={() => handleImageThumb(indexPosition)} colorStatus={thumbInput[0] === index && thumbInput[1] === indexPosition ? true : false}>Image {indexPosition + 1}:</Span>
                    <Span onClick={() => handleImageThumb(indexPosition)} colorStatus={thumbInput[0] === index && thumbInput[1] === indexPosition ? true : false}>{image.name}</Span>
                </Info>
            ))}
            <Options>
                <InputForm type="file" id={`inputFile${index}`} onChange={handleFile}></InputForm>
                <InputLabel htmlFor={`inputFile${index}`}>+</InputLabel>
            </Options>
        </Wrapper>
    )
}

export default ImageHandler;