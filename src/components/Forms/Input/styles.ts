import styled from 'styled-components'

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

export const InputText = styled.input`
    width: 95%;
    margin: 5px 0px;
    border: none;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    outline: none;
`;