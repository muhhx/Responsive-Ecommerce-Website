import styled from "styled-components";

type Props = {
    isClicked?: boolean;
}

export const Container = styled.div`
    width: 100%;
    min-height: 50px;
`;

export const Row = styled.div`
    display: flex;
    gap: 10px;
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