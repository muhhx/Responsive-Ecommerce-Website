import styled from 'styled-components'

export const Section = styled.nav`
    width: 100%;
    height: 6.5rem;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.backgroundWhite};
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: blue; */
`;