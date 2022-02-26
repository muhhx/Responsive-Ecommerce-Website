import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: calc(100vh - 6.5rem);
    background-color: ${({ theme }) => theme.color.backgroundMain};
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