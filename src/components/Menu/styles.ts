import styled from "styled-components";

export const Sticky = styled.div`
    width: 100%;
    height: 0;
    position: sticky;
    top: 0;
    z-index: 99;
`;

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(228, 219, 217, .8);
    backdrop-filter: blur(50px);
`;

export const Container = styled.div`
    width: 90%;
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-top: 6.5rem; */
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    font-size: 72px;
    color: ${({ theme }) => theme.color.fontBrown};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;