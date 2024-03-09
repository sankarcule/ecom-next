'use client'

import React from "react";
import Image from "next/image";
import AddToCart from "../../components/addToCart";
import {useQuery} from "@tanstack/react-query";
import { fetchSingleProduct } from "../../api/product";

export default function ProductDetails({ params }: { params: { id: string } }) {

    let id = params.id
    console.log(id);

    const {data, isLoading} = useQuery({
        queryKey: ['productDetails', params.id],
        queryFn: () => fetchSingleProduct({id: params.id})
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex w-full">
            <div className="w-1/2">
                <Image src={data?.images[0]}
                    width={500}
                    height={500}
                    alt="product image"/>
            </div>
            <div className="w-1/2">
                <p className="text-2xl font-light leading-7	mb-7">{data?.title}</p>
                <p className="text-sm font-semibold mb-4"><span className="font-light">Brand: </span>{data?.brand}</p>
                <div className="flex justify-between pb-4 mb-4 border-b-2 border-zinc-100	">
                    <p className="font-bold	text-lg	">{data?.price}$</p>
                    <p className="text-sm font-light">Rating: <span className="font-semibold">{data?.rating}</span>  </p>
                </div>
                <p className="">{data?.description}</p>
                <div className="mt-10">
                    <AddToCart item={data}></AddToCart>
                </div>
            </div>
          
        </div>
    )
}