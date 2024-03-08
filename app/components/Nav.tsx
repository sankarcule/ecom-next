'use client'
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

import React from "react";

export default function Nav() {
    const {user, isLoaded } = useUser();

    return (
        <header>
            <nav className="p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600">
                <div className="flex justify-between lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">Ecommerce</a>

                    <div className="flex justify-end items-center">
                        <a href="/cart" className="flex p-2 mr-4 relative bg-slate-100 rounded-full ">
                            <Image src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                            width={20}
                            height={20}
                            alt="cart icon"/>
                            <p className="text-sm text-blue-500	font-bold -mt-4 pl-4 absolute">3</p>
                        </a>
                        {
                                isLoaded && !user &&
                                <a href="/login" className="-m-1.5 p-1.5">Sign in</a>
                        }
                            
                        {
                                isLoaded && user &&
                                <div className="flex w-1/5 justify-end items-center">
                                    <p className="w-1/5"> {user.firstName} </p>
                                    <UserButton afterSignOutUrl="/" />
                                </div> 
                        }                    
                </div> 
            </div>
            </nav>
        </header>
    )
}