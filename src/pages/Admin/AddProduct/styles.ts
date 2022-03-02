import styled from "styled-components";

interface Props {
    status: boolean;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-bottom: 50px;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
`;

export const BooleanWrapper = styled.div`
    display: flex;
    gap: 20px;
    cursor: pointer;
    font-size: 12px;
    flex-wrap: wrap;
`;

export const BooleanOption = styled.span`
    color: ${(props: Props) => props.status === true ? (({ theme }) => theme.color.fontOrange) : (({ theme }) => theme.color.fontMain)};
`;

export const Span = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
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

export const Error = styled.p`
    color: ${({ theme }) => theme.color.fontOrange};
    text-align: center;
    font-size: 1.2rem;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 25px 0px;
    gap: 10px;
    align-items: center;
`;