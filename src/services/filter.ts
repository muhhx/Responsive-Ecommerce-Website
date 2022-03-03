import { Product } from "../types/product"
import { F } from "../types/shop"

type Props = {
    filteredProducts: Product[],
    F: F
}

export const filterProducts = ({filteredProducts: products, F}: Props) => {
    return products.filter(product => {
        if(product.gender.includes(F.genderFilter)) {
            return product
        }
    }).filter(product => {
        if(product.conditions.hasDiscount && product.pricing.discountPrice < F.priceFilter) {
            return product
        } else if(!product.conditions.hasDiscount && product.pricing.price < F.priceFilter) {
            return product
        }
    }).filter(product => {
        if(F.categoryFilter === "") {
            return product
        } else if(product.category === F.categoryFilter.toLowerCase()) {
            return product
        }
    }).filter(product => {
        if(F.collectionFilter === "") {
            return product
        } else if(product.collection === F.collectionFilter.toLowerCase()) {
            return product
        }
    }).filter(product => {
        if(F.conditionFilter === "") {
            return product
        } else if(F.conditionFilter === "discount" && product.conditions.hasDiscount) {
            return product
        } else if(F.conditionFilter === "new" && product.conditions.isNew) {
            return product
        } else if(F.conditionFilter === "available" && !product.conditions.isAvailable) {
            return product
        }
    })
};