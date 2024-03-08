import * as React from "react"
import AddToCart from "./addToCart";

import {
  Card,
  CardContent
} from "./ui/card"
import Image from "next/image"


export function ProductCard() {

  return (
        <Card className="w-[300px] pt-6 m-2 mb-10">
        <CardContent>
          <Image
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D"
              width={300}
              height={300}
              alt="product images"
              />
        </CardContent>
        <div className="ml-5 mb-5">
          <p className="mb-1 font-bold">Nike Shoe Air</p>
          <p className="mb-4 font-medium">100$</p>
          <AddToCart></AddToCart>
        </div>
      </Card>

  )
}
