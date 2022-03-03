export type F = {
    clearFilters: () => void;
    setGenderFilter: React.Dispatch<React.SetStateAction<string>>;
    setConditionFilter: React.Dispatch<React.SetStateAction<string>>;
    setPriceFilter: React.Dispatch<React.SetStateAction<number>>;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
    setCollectionFilter: React.Dispatch<React.SetStateAction<string>>;
    genderFilter: string;
    priceFilter: number;
    conditionFilter: string;
    categoryFilter: string;
    collectionFilter: string;
}