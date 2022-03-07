import styled, { createGlobalStyle } from "styled-components";

interface Props {
    isOpen: boolean;
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
`;

export const Main = styled.main`
    width: 100%;
`;