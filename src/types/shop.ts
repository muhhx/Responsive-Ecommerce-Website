export type ShopFunctions = {
    setDiscountFilter: React.Dispatch<React.SetStateAction<boolean>>;
    setAvailableFilter: React.Dispatch<React.SetStateAction<boolean>>;
    setNewFilter: React.Dispatch<React.SetStateAction<boolean>>
};

export type ShopStates = {
    discountFilter: boolean;
    availableFilter: boolean;
    newFilter: boolean
};