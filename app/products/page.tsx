import React from "react";
import { ProductCard } from "../components/productCard";
import Link from "next/link";

export default function Products() {

    const products = [{id: 1},{id: 2},{id: 3},{id: 4},
        {id: 5},{id: 6},{id: 7},{id: 8}];

    return (
        <div className="">
            
            <div className="flex justify-between mb-6">
                <p className="font-semibold">Products</p>
                <div className="pagination font-light text-sm">
                    <p className="">Showig 1 to 6 of 200 items</p>
                    <div className="flex justify-around font-medium	"> 
                        <button type="button" className="cursor-pointer"> Previous </button>
                        <button type="button" className="cursor-pointer"> Next </button>
                    </div>
                </div>
            </div>
            <Link href={'/products/1'} className="flex justify-start flex-wrap">
                {products.map((el) => (
                    <ProductCard></ProductCard>
                ))}
            </Link>
        </div>
    )
}