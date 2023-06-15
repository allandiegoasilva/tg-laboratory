import { IProduct } from "@/types/IProduct";

import { createContext, useEffect, useState } from "react";


export interface ICartContext {
  removeCart: (type: string) => void;
  addCart: (product: IProduct) => void;
  checkCart: (type: string) => boolean;
  totalCart: number;
  cart: IProduct[];
}

export const CartContext = createContext<ICartContext>({ 
  removeCart: (type: string) => null,
  addCart: () => {},
  checkCart: () => false,
  totalCart: 0,
  cart: []
});

export default function CartProvider({ children } :  { children: JSX.Element}) {

  const [cart, setCart] = useState<IProduct[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  function removeCart(value: string) {
    const arr = cart.filter(card => card.type != value);
    setCart(arr);
  }

  function addCart(card : IProduct) {

    const cardExists = cart.find(product => product.type == card.type);

    if(cardExists) return;

    setCart([...cart, card]);
  }

  function checkCart(type: string) : boolean {
    const cardExists = cart.find(product => product.type == type);

    return cardExists ? true : false;
  }

  useEffect(()=> {
    let price = 0;

    cart.map(product => price += product.price);

    setTotalCart(price);
  },[cart]);

  return (
   <CartContext.Provider
    value={{
     removeCart,
     addCart,
     checkCart,
     totalCart,
     cart 
    }}
   >
    {children}
   </CartContext.Provider>
  );
}