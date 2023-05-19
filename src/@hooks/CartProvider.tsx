import { createContext, useState } from "react";


export interface ICartContext {
  removeCart: (value: string) => void;
  addCart: (value: string) => void;
  cart: string[];
}

export const CartContext = createContext<ICartContext>({ 
  removeCart: (value: string) => null,
  addCart: () => {},
  cart: []
});

export default function CartProvider({ children } :  { children: JSX.Element}) {

  const [cart, setCart] = useState<string[]>([]);

  function removeCart(value: string) {
    const arr = cart.filter(item => item != value);

    setCart(arr);
  }

  function addCart(value : string) {

    if(cart.includes(value)) return;

    setCart([...cart, value]);
  }

  return (
   <CartContext.Provider
    value={{
     removeCart,
     addCart,
     cart 
    }}
   >
    {children}
   </CartContext.Provider>
  );
}