import styled from "styled-components";

type Props = {
    isClicked?: boolean;
}

export const Container = styled.div`
    width: 100%;
    border-top: solid 1px ${({ theme }) => theme.color.fontMain};
    border-bottom: solid 1px ${({ theme }) => theme.color.fontMain};
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

export const Row = styled.div`
    display: flex;
    gap: 10px;
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

export const Clear = styled.button`
    background-color: transparent;
    border: none;
    color: ${(props: Props) => props.isClicked === true ? ({ theme }) => theme.color.fontOrange : ({ theme }) => theme.color.fontMain};
    font-size: 12px;
    font-weight: 500;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 20px;
`;

export const Range = styled.input`
    width: 150px;
`;

export const FilterName = styled.span`
    color: ${(props: Props) => props.isClicked === true ? ({ theme }) => theme.color.fontOrange : ({ theme }) => theme.color.fontMain};
    font-size: 8px;
    font-weight: 500;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
`;