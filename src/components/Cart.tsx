import { CartContext, ICartContext } from "@/hooks/CartProvider";
import { Variants, useInView, motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { useContext, useRef, useState, useEffect} from 'react';
import { AiFillCloseCircle} from 'react-icons/ai';
import { BsFillTrashFill} from 'react-icons/bs';
import Image from "next/image";
import shoppingEmpty from '../images/shopping-bag.png';
import { useRouter } from "next/router";
import axios from "axios";

export default function Cart(){

  const { cart, removeCart, totalCart } = useContext<ICartContext>(CartContext);
  const ref = useRef(null);
  const inView = useInView(ref);
  const [viewMode, setViewMode] = useState<"sticky"|"fixed">('sticky');
  const [open, setOpen] = useState(false);

  const router = useRouter();

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

  const checkout = async () => {
    const { data } = await axios.post('/api/checkout', {
      products: cart
    });

    if(data.success) {
      router.push(data.uri);
    }
  }

  useEffect(() => {
    if(inView)return setViewMode("sticky");
    
    setViewMode('fixed');
  },[inView]);


  const colors : any = {
    pink: {
      linerBg: 'to-pink-500/5',
      shadow: 'shadow-pink-500',
      btnBgColor: 'bg-pink-500',
      btnShadowColor: 'shadow-pink-500/50',
      textPriceColor: 'text-pink-500'
    },
    purple: {
      linerBg: 'to-purple-500/5',
      shadow: 'shadow-purple-500',
      btnBgColor: 'bg-purple-500',
      btnShadowColor: 'shadow-purple-500/50',
      textPriceColor: 'text-purple-500'
    },
    sky: {
      linerBg: 'to-sky-500/5',
      shadow: 'shadow-sky-500',
      btnBgColor: 'bg-sky-500',
      btnShadowColor: 'shadow-sky-500/50',
      textPriceColor: 'text-sky-500'
    },
  }

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
            cart.length  == 0 ? (
              <div className="flex flex-col flex-1 h-full w-full py-8 items-center justify-center">
                <Image src={shoppingEmpty} alt="Carrinho vazio"/>
                <h3 className="text-zinc-950 uppercase font-bold">
                  Carrinho vazio!
                </h3>
              </div>
            ) : (
               <motion.div 
               className="flex flex-col  flex-1 w-full py-8 items-center justify-start gap-3"
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
                    cart.map((card) => (
                    <div key={card.type} className="flex p-2 rounded-lg w-full  border gap-2 hover:scale-105 transition ease-in-out duration-200 hover:shadow-lg">
                  
                      <div className="flex items-center">
                        <img src={card.image} className="w-28 h-24"/>
                      </div>
                      <div className="flex flex-col w-full">
                        <div className="flex w-full justify-between font-semibold">
                          <span>
                            {card.title}
                          </span>
                          <span className={`font-extrabold text-2xl font-satisfy ${colors[card.color].textPriceColor}`}>
                            R$ {card.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                          </span>
                          <span className="text-zinc-500 cursor-pointer">
                            <BsFillTrashFill size={25} onClick={() => removeCart(card.type)} className="text-red-500"/>
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
         {
           cart.length > 0 && (
            <div className="flex flex-col items-center w-full justify-center gap-3">
              <div className="flex w-full justify-between border-t-2 border-b-2 border-black py-3 text-sm ">
                <span className="font-bold text-lg">Total</span>
                <span className="text-sky-500 text-3xl font-semibold font-satisfy">R$ {totalCart.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
              </div>
              <button onClick={()=> checkout()} className="flex flex-col font-satisfy text-white p-4 bg-black rounded-lg shadow-inner font-extrabold shadow-zinc-900">
                  FINALIZAR A COMPRA 
              </button>
            </div>
           )
         }
        </motion.div>
      </motion.div>
    </>
  );
}