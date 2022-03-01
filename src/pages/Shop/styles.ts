import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    min-height: calc(100vh - 6.5rem);
    background-color: red;
`;