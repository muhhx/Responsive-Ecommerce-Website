export type Color = {
    colorName: string,
    colorRgb: string,
    images: string[],
    sizes: string[]
};

export type Product = {
    name: string,
    description: string,
    ref: string,
    imageThumb: string,
    display: boolean,
    category: string,
    collection: string,
    gender: string[],
    pricing: {
        price: number,
        discountPrice: number
    },
    conditions: {
        hasDiscount: boolean,
        isAvailable: boolean,
        isNew: boolean
    },
    colors: Color[],
    id?: string
};
