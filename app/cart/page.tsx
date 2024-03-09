import Image from "next/image";
import React from "react";
import AddToCart from "../components/addToCart";

export default function Cart() {
    return (
        <>
            <div className="flex m-5 w-full justify-between">
                <div className="w-3/5 m-5">
                    <p className="mb-3 font-semibold text-2xl">Order</p>
                    <div className="border-box rounded min-h-64 bg-white p-6 w-full">
                        <div className="flex text-black	text-base w-full">
                            <div className="flex flex-row gap-px justify-start items-start mt-0.5 ml-1 w-3/5">
                                <Image 
                                    width={60}
                                    height={60}
                                    alt="Picture of the author"
                                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"/> 
                                <div className="w-5/6 pl-5 flex flex-col self-center">
                                    <p className="text-sm font-medium ">Nike Air shoe</p>
                                    <p className="text-xs font-medium"><span className="text-xs font-normal text-slate-400">Rating:</span> 4.68</p>
                                </div>

                            </div>
                            <div className="w-1/5 flex items-center">
                                <p className="text-base	font-medium	text-lime-400">$1.01</p>
                                <p className="text-base	font-medium	text-inherit line-through ml-3.5">$1.11</p>
                            </div>
                            <div className="w-1/5 flex items-center">
                                <p className="text-xs font-normal text-slate-400 mr-3.5	">Quantity: </p>
                                <AddToCart></AddToCart>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 m-5">
                    <p className="mb-3 font-semibold text-2xl">Payment Summary</p>
                    <div className="border-box rounded min-h-64 text-black bg-white p-4 w-full">
                        <div className="flex justify-between my-3">
                            <p className="text-sm text-slate-500"> Order Summary </p>
                            <p className="font-medium tracking-widest text-sm"> 1$ </p>
                        </div>
                        <div className="flex justify-between my-3">
                            <p className="text-sm text-slate-500">Additional Service</p>
                            <p className="font-medium tracking-widest text-sm"> 0.1$ </p>
                            </div>
                        <div className="flex justify-between my-3">
                            <p className="text-sm text-slate-500">Total Amount</p>
                            <p className="font-medium tracking-widest text-sm"> 0.1$ </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}