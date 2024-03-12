'use client'

import React from "react";
import { ProductCard } from "../components/productCard";
import {useQuery} from "@tanstack/react-query";
import { fetchProducts } from "../api/product";
import { useState } from "react";
import { Product } from "../entities/Product";

export default function Products() {

    const [skip, setSkip] = useState(0);
    let limit = 10

    const {data, isLoading, refetch} = useQuery({
        queryKey: ['products', {skip, limit}],
        queryFn: () => fetchProducts({skip, limit})
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
          <div className="flex justify-between mb-6">
              <p className="font-semibold">Products</p>
              <div className="pagination font-light text-sm">
                  <p className="">Showig {data!.skip + 1} to {data!.limit + data!.skip} of {data?.total} items</p>
                  <div className="flex justify-around font-medium	">
                      { skip < 10 ? <button type="button" disabled className="opacity-50 cursor-default cursor-pointer" >Previous</button> : 
                          <button type="button" className="cursor-pointer" 
                          onClick={()=> {
                              setSkip(skip-10)
                              refetch();
                          }}> Previous </button>
                        }  
                      { limit+skip >= data!.total ? <button type="button" disabled className="opacity-50 cursor-default	cursor-pointer" >Next</button> : 
                          <button type="button" className="cursor-pointer" 
                          onClick={()=> {
                              setSkip(skip+10)
                              refetch();
                          }}> Next </button>
                        }
                      
                  </div>
              </div>
          </div>
          <div className="flex justify-start flex-wrap">
              {data?.products?.map((el: Product) => (
                  <ProductCard key={el.id} product={el} />
              ))}
          </div>
        </>
    )
}