
import { Inter } from 'next/font/google'
import { FiShoppingBag } from 'react-icons/fi';
import { Variants, motion } from 'framer-motion';

import { useState, useContext } from 'react';
import { CartContext } from '@/hooks/CartProvider';
import { useRouter } from 'next/router';
import { IProduct } from '@/types/IProduct';

export interface ICard {
  onClick?: () => void;
  selected: boolean;
  product:  IProduct;
}

export default function Card({ product, selected = false, onClick = () => {} } : ICard) {

  const [showBlur, setShowBlur] = useState(false);

  const { addCart, removeCart, checkCart } = useContext(CartContext);

  const router = useRouter();

  const variants : Variants = {
    show: {
      display: 'flex',
      width: "100%",
      height: "100%",
      content: 'initial', 
      scale: 1,
      opacity: 1
    },
    close: {
      scale: 0,
      opacity: 0,
      transitionEnd: {
        display: 'none'
      }
    }
  }


  return (
    <motion.div 
      onClick={onClick}
      transition={{
        ease: 'easeInOut',
        duration: 0.5
      }}
      className={`
        flex  
        flex-col
        lg:flex-row
        gap-16  
        justify-center 
        text-gray-100 
        backdrop-blur-lg 
        bg-gradient-to-b   
        transition-colors 
        w-auto
        duration-700
        h-full
        relative
        from-slate-950 
        ${selected && product.colors.linerBg}

        items-center px-8 pb-8 
       ${ selected ? 'opacity-100' : 'opacity-50'}
      `}>
            <div onMouseEnter={() => setShowBlur(true)} onMouseLeave={() => setShowBlur(false)}  className="flex justify-center items-center w-auto relative ">
              <div className="relative w-full h-[150px]">
                 <img  src={product.image} className={`transition ease-in-out h-auto w-full duration-300 shadow-lg ${selected && product.colors.shadow} ${ selected && 'scale-105'} `} alt={product.title + ' ' + product.description }/>
              </div>
              <motion.div
              initial={'close'}
              animate={showBlur ? 'show' : 'close'}
              variants={variants} 
              transition={{
                ease: 'easeInOut',
                duration: 0.3
              }}
              className='hidden w-full cursor-pointer flex-col justify-center items-center absolute bg-white/30 backdrop-blur-none rounded-xl'>
                <h1 className='
                  font-satisfy 
                  text-xl
                  text-transparent
                  bg-gradient-to-b
                  from-slate-100 
                  to-white
                  bg-clip-text
                  text-center
                  text-bolder'>
                   CLIQUE PARA VER A HISTÓRIA
                </h1>
              </motion.div>
            </div>
            <div className="flex flex-col justify-around h-full w-full pt-8">
                <h1 className='
                  font-satisfy 
                  text-3xl
                  text-transparent
                  bg-gradient-to-b
                  from-slate-100 
                  to-white
                  bg-clip-text
                  text-bolder
                  '>
                    {product.title}
                </h1>
               <div className="flex flex-col w-[250px] flex-1 py-2  justify-between">
                  <p className='max-w-sm text-secondary  font-medium font-prompt mb-10'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, architecto sapiente. Enim quos molestiae nihil at nisi similique assumenda vel totam...
                </p>
                <span className={`font-extrabold text-4xl font-satisfy ${product.colors.textPriceColor}`}>
                  R$ {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
                </span>
               </div>
               <div className={`flex ease-in duration-300 gap-3 pt-5 ${selected && 'scale-105'}`}>
                  <button
                   className={`
                    flex 
                    items-center 
                    justify-center
                    gap-1  
                    rounded-lg 
                    p-3
                    px-6
                    text-xs
                    font-prompt
                    uppercase
                    border 
                    transition
                    ease-in-out
                    duration-200
                    ${checkCart(product.type) ? ' bg-white text-slate-950 ' : 'text-secondary border-secondary'}
                   `}

                   onClick={() => {
                    checkCart(product.type)  ? removeCart(product.type) : addCart(product)
                    }}
                  >
                    <FiShoppingBag size={25}/>
                  </button>
                  <button 
                    type={'button'} 
                    onClick={()=> router.push('/checkout?product=' + product.type)}
                    className={`
                      flex 
                      items-center 
                      justify-center
                      gap-1  
                      rounded-lg 
                      p-3
                      px-6
                      text-xs
                      font-prompt
                      uppercase
                      ${ product.colors.btnBgColor}
                  
                      text-white
                      shadow-sm

                     ${product.colors.btnShadowColor} 
                      font-semibold
                      transition
                      ease-in-out
                      hover:scale-105
                      duration-300
                    `}>
                      Comprar 
                    </button>
               </div> 
            </div>
          </motion.div>
  );
}