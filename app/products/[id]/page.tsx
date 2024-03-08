import React from "react";
import Image from "next/image";
import AddToCart from "../../components/addToCart";

export default function ProductDetails() {
    return (
        <div className="flex w-full">
            <div className="w-1/2">
                <Image src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
                    width={500}
                    height={500}
                    alt="product image"/>
            </div>
            <div className="w-1/2">
                <p className="text-2xl font-light leading-7	mb-7">Nike air Shoe</p>
                <p className="text-sm font-semibold mb-4"><span className="font-light">Brand: </span>Apple</p>
                <div className="flex justify-between pb-4 mb-4 border-b-2 border-zinc-100	">
                    <p className="font-bold	text-lg	">28.00$</p>
                    <p className="text-sm font-light">Rating: <span className="font-semibold">5</span>  </p>
                </div>
                <p className="">An apple mobile which is nothing like apple</p>
                <div className="mt-10">
                    <AddToCart></AddToCart>
                </div>
            </div>
          
        </div>
    )
}