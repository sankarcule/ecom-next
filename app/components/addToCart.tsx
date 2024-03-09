import * as React from "react"
import { useCartStore } from "../store";


export default function AddToCart({item}: any) {

    const quantity = useCartStore((state)=> state.items.find(i => i.id == item.id)?.quantity);
    const addItem = useCartStore((state) => state.addItem);
    const removeItem = useCartStore((state) => state.removeItem);
    let newItem = {...item, quantity: quantity}

    return (
        <div className="flex justify-start flex-wrap">
            { quantity ? 
            <div className=""> 
                <button onClick={() => removeItem(newItem)} className="bg-white hover:bg-gray-100 text-gray-800 py-0.5 px-1 border border-gray-400 rounded shadow mr-2">
                    -
                </button>
                {quantity}
                <button onClick={()=> addItem(newItem)} className="bg-white hover:bg-gray-100 text-gray-800 py-0.5 px-1 border border-gray-400 rounded shadow ml-2">
                    +
                </button>
            </div>
            
            :
            <button onClick={()=> addItem(newItem)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add to Cart
            </button>
            }
        </div>
    )
}
