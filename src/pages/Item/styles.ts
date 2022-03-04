import styled from "styled-components";

type Props = {
    hasDiscount?: boolean;
    isSelected?: boolean;
    url?: string;
    rgb?: string;
}

export const Section = styled.section`
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.color.backgroundMain};

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }
`;

export const ImagesContainer = styled.div`
    width: 100%;
`;

export const Image = styled.div`
    width: 100%;
    height: 80vh;
    background-image: url(${(props: Props) => props.url});
    background-size: cover;
    background-position: center center;
`;

export const InformationContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        position: initial;
        height: auto;
        padding: 50px 0px;
    }
`;

export const InformationWrapper = styled.div`
    height: 100%;
    width: 90%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const Category = styled.span`
    color: ${({ theme }) => theme.color.fontOrange};
    text-transform: uppercase;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    line-height: 1;
`;

export const Description = styled.p`
    text-align: center;
    max-width: 60%;
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};

    @media only screen and (max-width: 250px) {
        max-width: 100%;
    }
`;

export const Price = styled.h1`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: ${(props: Props) => props.hasDiscount === true ? '12px' : '18px'};
    text-decoration: ${(props: Props) => props.hasDiscount === true ? 'line-through' : 'initial'};
    font-weight: 400;
`;

export const Discount = styled.h1`
    color: ${({ theme }) => theme.color.fontOrange};
    font-size: 18px;
    font-weight: 400;
`;

export const OptionsWrapper = styled.div`
    display: flex;
    gap: 10px;
    display: flex;
    align-items: center;
`;

export const OptionName = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const Option = styled.button`
    background-color: transparent;
    border: none;
    font-size: 12px;
    font-weight: 400;
    font-family: 'Jost', sans-serif;
    color: ${(props: Props) => props.isSelected === true ? ({ theme }) => theme.color.fontOrange : ({ theme }) => theme.color.fontMain};
    cursor: pointer;
`;

export const ColorBorder = styled.button`
    width: 20px;
    aspect-ratio: 1;
    padding: 2px;
    border: none;
    border-bottom: ${(props: Props) => props.isSelected === true ? 'solid 1px #ff670f' : 'none'};
    cursor: pointer;
    background-color: transparent;
`;

export const Color = styled.div`
    background-color: ${(props: Props) => props.rgb};
    height: 100%;
    width: 100%;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 5px 0px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    border: none;
    color: white;
    background-color: ${({ theme }) => theme.color.reverseColor};
    cursor: pointer;
    transition: .2s ease-in;
    
    &:hover {
        background-color: ${({ theme }) => theme.color.reverseHover};
    }
`;

export const Esgotado = styled.div`
    width: 100%;
    padding: 5px 0px;
    font-size: 1.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Divider = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;