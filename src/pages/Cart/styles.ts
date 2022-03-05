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
    height: 100vh;
`;