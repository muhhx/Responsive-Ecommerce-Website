import styled, { createGlobalStyle } from "styled-components";

interface Props {
    isOpen: boolean;
}

export const GlobalStyle = createGlobalStyle`
    body {
        overflow: ${( props: Props) => props.isOpen === true ? 'hidden' : 'initial'}
    }
`;

export const Main = styled.main`
    width: 100%;
`;