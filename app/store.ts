import {create} from "zustand";
import { Product } from "./entities/Product"; 
import { immer } from 'zustand/middleware/immer'


type CartStore = {
    items: Product[],
    addItem: (item: any) => void,
    removeItem: (item: any) => void,
    totalOrderAmount: () => void
}

export const useCartStore = create()((set, get) => ({
   items: [],
   addItem: (item: any) => {
        let newItem = item;
        newItem.quantity = newItem.quantity ? newItem.quantity + 1 : 1;
        set((state: any) => ( {
            items:[...state.items.filter((i: any)=> i.id != item.id), newItem] 
        }))
    },
   removeItem: (item: any) => {
        let newItem = item;
        newItem.quantity = newItem.quantity ? newItem.quantity - 1 : 0;
        if (newItem.quantity == 0) {
            set((state: any) => ( {
                items: state.items.filter((i: any)=> i.id != item.id)
            }))
            return
        }
        set((state: any) => ( {
            items:[...state.items.filter((i: any)=> i.id != item.id), newItem] 
        }))
   },
   totalOrderAmount: () => {
    let amount = 0 
    get().items.map((i: any)=> amount += i.quantity * (i.price - (i.discountPercentage * i.price * 0.01)))
    return amount
   } 
})) 