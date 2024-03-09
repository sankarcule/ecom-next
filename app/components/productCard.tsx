import * as React from "react"
import AddToCart from "./addToCart";
import Link from "next/link";

import {
  Card,
  CardContent
} from "./ui/card"
import Image from "next/image"
import { Product } from "../entities/Product";

interface ProductProps {
  product: Product
}

export function ProductCard({product}: ProductProps) {

  return (
        <Card className="w-[300px] pt-6 m-2 mb-10">
        <CardContent className="h-300">
          <Link href={'/products/'+product.id}>
            <Image
                src={product.images[0]}
                width={300}
                height={300}
                alt="product images"
                />
          </Link>
        </CardContent>
        <div className="ml-5 mb-5">
          <p className="mb-1 font-bold">{product.title}</p>
          <p className="mb-4 font-medium">{product.price}$</p>
          <AddToCart></AddToCart>
        </div>
      </Card>

  )
}
