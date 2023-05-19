import { CartContext, ICartContext } from "@/@hooks/CartProvider";
import { Variants, useInView, motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { useContext, useRef, useState, useEffect} from 'react';
import { AiFillCloseCircle} from 'react-icons/ai';
import { BsFillTrashFill} from 'react-icons/bs';
import Image from "next/image";
import shoppingEmpty from '../images/shopping-bag.png';
import { ICard } from "./Card";
import axios from "axios";

export default function Cart(){

  const { cart } = useContext<ICartContext>(CartContext);
  const ref = useRef(null);
  const inView = useInView(ref);
  const [viewMode, setViewMode] = useState<"sticky"|"fixed">('sticky');
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState<ICard[]>([]);

  const variants : Variants = {
    open: {
      display: "flex", 
      opacity: 1,
      width: '100%'
    },
    close: {
      opacity: 0,
      width: 0,
      transitionEnd: {
        display: 'none'
      }
    }
  }

  async function fetchProducts() {
    const { data } = await axios.get('/api/products');

    data.map((product : any) => {
      if(cart.includes(product.type))
        setCards([...cards, product]);
    });
  }


  useEffect(() => {
    if(inView)return setViewMode("sticky");
    
    setViewMode('fixed');
  },[inView]);

  useEffect(()=> {
     fetchProducts();
  },[]);

  return (
    <>
      <div className={`${viewMode} top-0 w-full  flex justify-end px-24 py-3 backdrop-blur-md  z-40`} ref={ref}>
          <button className="flex relative" onClick={() => setOpen(true)}>
            <FiShoppingBag size={25} className='text-white'/>
            {cart.length > 0 && <div className="absolute -top-1 -right-3 text-sm font-satisfy text-purple-500 shadow-xl shadow-white h-4 w-4 bg-white text-slate-952 rounded-md flex items-center justify-center">{cart.length}</div>}
          </button>
      </div>
      <motion.div 
        className="fixed w-full h-screen bg-black/80 z-50 right-0 flex"
          initial={'close'}
          animate={open ? 'open' : 'close'}
          variants={variants}
          transition={{
            ease: 'easeInOut'
          }}
        >
        <motion.div 
          initial={'close'}
          animate={open ? 'open' : 'close'}
          variants={variants}
          transition={{
            ease: 'easeInOut',
            duration: 0.3
          }}
          className="absolute  flex-col w-full  h-full items-start bg-white z-50 px-3 py-4 lg:max-w-sm right-0 flex rounded-tl-xl">
          <div className="flex w-full">
            <button type="button" onClick={() => setOpen(false)} className="text-[#D9D9D9]">
              <AiFillCloseCircle size={35}/>
            </button>
            <div className="flex justify-center items-center w-full text-xl font-bold text-zinc-950">
              Seu carrinho
            </div>
          </div>
          
          {
            cards.length  == 0 ? (
              <div className="flex flex-col h-full w-full py-8 items-center justify-center">
                <Image src={shoppingEmpty} alt="Carrinho vazio"/>
                <h3 className="text-zinc-950 uppercase font-bold">
                  Carrinho vazio!
                </h3>
              </div>
            ) : (
               <motion.div 
               className="flex flex-col  w-full py-8 items-center justify-center gap-3"
               initial={{
                opacity: 0
               }}
               animate={{
                opacity: 1
               }}
               transition={{
                ease: "easeIn",
                duration: 0.3
               }}
               >
                  {
                    cards.map((value) => (
                    <div key={value.type} className="flex p-2 rounded-lg w-full  border gap-2">
                      <div className="flex items-center">
                        <img src={value.image} className="w-28 h-24"/>
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex w-full justify-between font-semibold">
                          <span>
                            {value.title}
                          </span>
                          <span>
                            {value.price}
                          </span>
                          <span className="text-zinc-500 cursor-pointer">
                            <BsFillTrashFill/>
                          </span>
                        </div>
                        <div className="flex w-full text-zinc-500">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit...
                        </div>
                      </div>
                    </div>
                    ))
                  }
               </motion.div>
            )
          }
        
        </motion.div>
      </motion.div>
    </>
  );
}