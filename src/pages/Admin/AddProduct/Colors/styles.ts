import styled from 'styled-components'

interface Props {
    isShown: boolean;
}

export const Container = styled.div`
    width: 100%;
    display: ${(props: Props) => props.isShown === true ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
`;

export const RgbInput = styled.input`
    width: 30px;
    height: 38px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const Span = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const InputArea = styled.div`
    width: 100%;
    border-left: solid 4px ${({ theme }) => theme.color.fontMain};
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputText = styled.input`
    width: 95%;
    margin: 5px 0px;
    border: none;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    outline: none;
`;

export const InputButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 12px;
    font-family: 'Jost', sans-serif;
    width: 20%;
    color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
    height: 100%;
`;

export const CustomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const ColorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20%;
`;

export const SizeSpan = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontOrange};
    cursor: pointer;
`;

export const Button = styled.button`
    width: 100%;
    padding: 5px 0px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    border: none;
    color: white;
    margin-top: 15px;
    background-color: ${({ theme }) => theme.color.reverseColor};
    cursor: pointer;
    transition: .2s ease-in;
    
    &:hover {
        background-color: ${({ theme }) => theme.color.reverseHover};
    }
`;