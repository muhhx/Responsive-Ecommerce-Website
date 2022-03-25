import styled, { createGlobalStyle } from "styled-components";

interface Props {
    isOpen?: boolean;
    bgColor?: string;
}

export const GlobalStyle = createGlobalStyle`
    body {
        overflow: ${( props: Props) => props.isOpen === true ? 'hidden' : 'initial'}
    }

    ::-webkit-scrollbar {
        height: 8px;
        width: 0px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: orange;
    }

    input[type=range] {
        -webkit-appearance: none;
        background-color: ${( props: Props ) => props.bgColor};
        height: 1px;
        padding: 0px 10px;
        width: 100px;
        margin-top: 5px;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        background-color: ${( props: Props ) => props.bgColor};
    }
`;

export const Main = styled.main`
    width: 100%;
`;