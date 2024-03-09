import { ProductFetchData } from "../entities/Product";

export const fetchProducts = async (query: any): Promise<ProductFetchData> => {
    const data = await fetch('https://dummyjson.com/products?skip='+query.skip+'&limit='+query.limit)
                        .then(res => res.json())
    console.log(data);
    return data
}