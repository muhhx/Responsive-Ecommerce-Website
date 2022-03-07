import styled from "styled-components";

type Props = {
    isLast?: boolean;
    url?: string;
}

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.backgroundMain};
`;

export const Quantity = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin: 50px 0px;
    color: ${({ theme }) => theme.color.backgroundMain};
    background-color: ${({ theme }) => theme.color.blackWhite};
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1000px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const CheckoutSticky = styled.div`
    width: 100%;
    height: 0px;
    position: sticky;
    bottom: 0;
`;

export const CheckoutPanel = styled.div`
    width: 100%;
    height: 6.5rem;
    background-color: ${({ theme }) => theme.color.reverseColor};
    position: absolute;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CheckoutContainer = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CheckoutSpan = styled.span`
    color: white;
    font-size: 12px;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    gap: 10px;
    margin-bottom: ${( props: Props ) => props.isLast === true ? '100px' : '0px'};

    @media only screen and (max-width: 450px) {
        flex-direction: column;
        height: 400px;
    }
`;

export const Image = styled.div`
    height: 100%;
    width: 40%;
    background-image: url(${(props: Props) => props.url});
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const BasicInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const Name = styled.h1`
    font-size: 22px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.fontTerciary};
    color: ${({ theme }) => theme.color.fontMain};
    line-height: 1;
`;

export const Span = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const FunctionalInformation = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Price = styled.h3`
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const Operations = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.color.fontMain};
    padding: 5px 0px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
`;

export const Delete = styled.button`
    background-color: transparent;
    border: none;
    font-size: 10px;
    font-family: 'Jost', sans-serif;
    color: ${({ theme }) => theme.color.fontMain};
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    transition: .2s ease-in;

    &:hover {
        color: ${({ theme }) => theme.color.fontOrange};
    }
`;

export const Checkout = styled.button`
    background-color: transparent;
    border: solid 1px white;
    padding: 5px 20px;
    font-size: 10px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    transition: .2s ease-in;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;

    &:hover {
        color: ${({ theme }) => theme.color.fontOrange};
        border-color: ${({ theme }) => theme.color.fontOrange};
    }
`;

export const Aviso = styled.span`
    color: ${({ theme }) => theme.color.fontOrange};
    font-size: 12px;
    margin-bottom: 50px;
`;