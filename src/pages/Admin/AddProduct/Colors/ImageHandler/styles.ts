import styled from "styled-components"

interface Props {
    colorStatus: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;  
`;

export const Span = styled.span`
    color: ${( props: Props ) => props.colorStatus === true ? (({ theme }) => theme.color.fontOrange) : (({ theme }) => theme.color.fontMain)};
    font-size: 12px;
    cursor: pointer;
`;

export const Option = styled.button`
    background: transparent;
    border: none;
    font-size: 12px;
    font-family: 'Jost', sans-serif;
    color: ${({ theme }) => theme.color.fontMain};
`;


export const InputLabel = styled.label`
    font-size: 12px;
    font-family: 'Jost', sans-serif;
    color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
`;

export const InputForm = styled.input`
    display: none;
`;