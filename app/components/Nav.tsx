'use client'
import { UserButton, useUser } from "@clerk/nextjs";

import React from "react";

export default function Nav() {
    const {user, isLoaded } = useUser();

    return (
        <header>
            <nav className="p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600">
                <div className="flex justify-between lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">Ecommerce</a>
                    {
                            isLoaded && !user &&
                            <>
                                <a href="/login" className="-m-1.5 p-1.5">Sign in</a>
                            </>
                    }
                        
                    {
                            isLoaded && user &&
                            <div className="flex w-1/5 justify-end items-center">
                                <p className="w-1/5"> {user.firstName} </p>
                                <UserButton afterSignOutUrl="/" />
                            </div> 
                    } 
                </div> 
            </nav>
        </header>
    )
}