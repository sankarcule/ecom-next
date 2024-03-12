import {create} from "zustand";
import { Product } from "./entities/Product"; 
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'


type CartStore = {
    items: Product[],
    addItem: (item: Product) => void,
    removeItem: (item: Product) => void,
    totalOrderAmount: () => number
}

export const useCartStore = create<CartStore>()(
    immer(persist((set, get) => ({
        items: [],
        addItem: (item) => {
            if (item.quantity > 0) {
                set((state) => {
                    state.items.find((i)=> i.id == item.id)!.quantity += 1
                })
                return
            }
            let newItem = item;
            newItem.quantity = newItem.quantity ? newItem.quantity + 1 : 1;
            set((state) => ( {
                items:[...state.items.filter((i)=> i.id != item.id), newItem] 
            }))
        },
        removeItem: (item) => {
            let quantity = item.quantity ? item.quantity - 1 : 0;
            if (quantity == 0) {
                set((state) => ( {
                    items: state.items.filter((i)=> i.id != item.id)
                }))
                return
            }
            set((state) => {
                state.items.find((i)=> i.id == item.id)!.quantity = quantity
            })
        },
        totalOrderAmount: () => {
            let amount = 0 
            get().items.map((i)=> amount += i.quantity * (i.price - (i.discountPercentage * i.price * 0.01)))
            return amount
        } 
    }), {
        name: 'cart-storage',
        skipHydration: true,
        storage: createJSONStorage(() => localStorage)
    }))) 