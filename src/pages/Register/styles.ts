import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: calc(100vh - 6.5rem);
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Container = styled.div`
    width: 90%;
    max-width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const FormWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-family: ${({ theme }) => theme.font.fontSecundary};
    text-transform: uppercase;
    font-size: min(25vw, 84px);
    font-weight: 500;
    letter-spacing: max(-10px, -3vw);
    line-height: .8;

`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;

export const Error = styled.p`
    color: ${({ theme }) => theme.color.fontOrange};
    text-align: center;
    font-size: 1.2rem;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    `;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 1.2rem;
`;

export const InputArea = styled.div`
    width: 100%;
    border-left: solid 4px ${({ theme }) => theme.color.fontMain};
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    width: 95%;
    margin: 5px 0px;
    border: none;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    outline: none;
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

export const OptionsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Option = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 1.2rem;
    cursor: pointer;
`;