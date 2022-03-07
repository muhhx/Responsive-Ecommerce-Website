import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: calc(100vh - 6.5rem);
    background-color: ${({ theme }) => theme.color.backgroundMain};
    display: flex;
    justify-content: center;
`;