import * as React from "react"

export default function AddToCart() {

    const isAdded = true;

    return (
        <div className="flex justify-start flex-wrap">
            { isAdded ? 
            <div className=""> 
                <button className="bg-white hover:bg-gray-100 text-gray-800 py-0.5 px-1 border border-gray-400 rounded shadow mr-2">
                    -
                </button>
                1
                <button className="bg-white hover:bg-gray-100 text-gray-800 py-0.5 px-1 border border-gray-400 rounded shadow ml-2">
                    +
                </button>
            </div>
            
            :
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add to Cart
            </button>
            }
        </div>
    )
}
