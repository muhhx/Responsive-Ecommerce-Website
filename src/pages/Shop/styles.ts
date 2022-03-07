import styled from "styled-components";

type Props = {
    isClicked?: boolean;
}

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
`;

export const Header = styled.div`
    width: 100%;
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-family: ${({ theme }) => theme.font.fontSecundary};
    text-transform: uppercase;
    font-size: min(25vw, 84px);
    font-weight: 500;
    letter-spacing: max(-10px, -3vw);
    line-height: .8;
    text-align: center;
`;

export const Control = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media only screen and (max-width: 300px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media only screen and (max-width: 300px) {
        width: 100%;
        border-bottom: solid .5px ${({ theme }) => theme.color.fontMain};
    }
`;

export const GenderWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: flex-start;
`;

export const Option = styled.button`
    background-color: transparent;
    border: none;
    color: ${(props: Props) => props.isClicked === true ? ({ theme }) => theme.color.fontOrange : ({ theme }) => theme.color.fontMain};
    font-size: 12px;
    font-weight: 500;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Quantity = styled.span`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 8px;
`;

export const Products = styled.div`
    width: 100%;
    margin: 50px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;

    @media only screen and (max-width: 500px) {
        justify-content: center;
    }
`;