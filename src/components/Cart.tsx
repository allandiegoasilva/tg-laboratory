import { CartContext, ICartContext } from "@/@hooks/CartProvider";
import { Variants, useInView, motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { useContext, useRef, useState, useEffect} from 'react';
import { AiFillCloseCircle} from 'react-icons/ai';
import Image from "next/image";
import shoppingEmpty from '../images/shopping-bag.png';

export default function Cart(){

  const { cart } = useContext<ICartContext>(CartContext);

  const ref = useRef(null);
  const inView = useInView(ref);
  const [viewMode, setViewMode] = useState<"sticky"|"fixed">('sticky');
  const [background, setBackground] = useState('bg-transparent');
  const [open, setOpen] = useState(false);

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


  useEffect(() => {
    if(inView){
      setBackground("bg-transparent");
      return setViewMode("sticky");
    }

    setBackground("backdrop-blur-md bg-white/30")

    setViewMode('fixed');
    console.log("aqui");
  },[inView]);

  return (
    <>
      <div className={`${viewMode} top-0 w-full  flex justify-end px-24 py-3 ${background}`} ref={ref}>
          <button className="flex relative" onClick={() => setOpen(true)}>
            <FiShoppingBag size={25} className='text-white'/>
            {cart.length > 0 && <div className="absolute -top-1 -right-3 text-sm font-satisfy text-purple-500 shadow-xl shadow-white h-4 w-4 bg-white text-slate-952 rounded-md flex items-center justify-center">{cart.length}</div>}
          </button>
      </div>
      <motion.div 
        className="fixed w-full h-screen bg-black/80 z-10 right-0 flex"
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
          className="absolute  flex-col w-full h-full items-start bg-white z-10 px-3 py-4 lg:max-w-sm right-0 flex rounded-tl-xl">
          <div className="flex w-full">
            <button type="button" onClick={() => setOpen(false)} className="text-[#D9D9D9]">
              <AiFillCloseCircle size={35}/>
            </button>
            <div className="flex justify-center items-center w-full text-xl font-bold text-zinc-950">
              Seu carrinho
            </div>
          </div>
          <div className="flex flex-col h-full w-full py-8 items-center justify-center">
            <Image src={shoppingEmpty} alt="Carrinho vazio"/>
            <h3 className="text-zinc-950 uppercase font-bold">
              Carrinho vazio!
            </h3>
          </div>
        
        </motion.div>
      </motion.div>
    </>
  );
}