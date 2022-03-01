import { InputWrapper, Span, InputArea, InputText } from "./styles";

interface Props {
    span?: string;
    state: string;
    setState: (value: React.SetStateAction<string>) => void;
}

const Input: React.FC<Props> = ({ span, state, setState }) => {

    return(
        <InputWrapper>
            {span ? <Span>{span}</Span> : ''}
            <InputArea>
                <InputText type="text" onChange={(e) => setState(e.target.value)} value={state}/>
            </InputArea>
        </InputWrapper>
    )
}

export default Input;