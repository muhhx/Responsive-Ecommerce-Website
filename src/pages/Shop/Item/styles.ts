import styled from "styled-components";

type Props = {
    hasDiscount: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-self: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    position: relative;
`;

export const Image = styled.img`
    max-height: 100%;
`;

export const DescriptionWrapper = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.span`
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const PriceWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    
`;

export const Price = styled.span`
    text-transform: uppercase;
    text-decoration: ${(props: Props) => props.hasDiscount === true ? 'line-through' : 'initial'};
    color: ${({ theme }) => theme.color.fontMain};
`;

export const PriceDiscount = styled.span`
    background-color: ${({ theme }) => theme.color.fontOrange};
    padding: 0px 5px;
    text-transform: uppercase;
    color: white;
`;

export const NewWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.fontOrange};
    color: white;
    padding: 0px 8px;
    position: absolute;
    top: 5px;
    left: 5px;
`;

export const AvailableWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.backgroundMain};
    color: ${({ theme }) => theme.color.reverseColor};
    padding: 0px 8px;
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
`;