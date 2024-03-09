export interface Product {
    id: string,
    brand: string,
    title: string,
    images: string[],
    price: number,
    rating: number,
    discountPercentage: number,
    description: string
}

export interface ProductFetchData {
    limit: number,
    products: Product[],
    skip: number,
    total: number
}