import { Product, ProductFetchData } from "../entities/Product";

type pagination = {skip: number, limit: number}
type searchId = {id: string}

export const fetchProducts = async (query: pagination): Promise<ProductFetchData> => {
    const data = await fetch('https://dummyjson.com/products?skip='+query.skip+'&limit='+query.limit)
                        .then(res => res.json())
    return data
}

export const fetchSingleProduct = async (query: searchId): Promise<Product> => {
    const data = await fetch('https://dummyjson.com/products/'+query.id)
                        .then(res => res.json())
    return data
}