'use client'
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

import React from "react";
import { useCartStore } from "../store";
import Link from "next/link";

export default function Nav() {
    const {user, isLoaded } = useUser();
    const items = useCartStore((state)=> state.items);
    console.log(items);
    return (
        <header>
            <nav className="p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600">
                <div className="flex justify-between lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">Ecommerce</Link>

                    <div className="flex justify-end items-center">
                        <Link href="/cart" className="flex p-2 mr-4 relative bg-slate-100 rounded-full ">
                            <Image src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                            width={20}
                            height={20}
                            alt="cart icon"/>
                            <p className="text-sm text-blue-500	font-bold -mt-4 pl-4 absolute">{items.length}</p>
                        </Link>
                        {
                                isLoaded && !user &&
                                <Link href="/sign-in" className="-m-1.5 p-1.5">Sign in</Link>
                        }
                            
                        {
                                isLoaded && user &&
                                <div className="flex w-1/5 ml-2 justify-end items-center">
                                    <UserButton afterSignOutUrl="/" />
                                </div> 
                        }                    
                </div> 
            </div>
            </nav>
        </header>
    )
}