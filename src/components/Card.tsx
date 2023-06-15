
<<<<<<< HEAD
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
=======
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FiShoppingBag } from 'react-icons/fi';
import { Variant, Variants, motion } from 'framer-motion';

import { useState, useContext } from 'react';
import { CartContext } from '@/@hooks/CartProvider';

export interface ICard {
  image: any;
  color: string;
  price: number;
  description: string;
  title: string;
  selected?: boolean;
  type: string;
}

export default function Card({ image, color, description, price, title, selected = false, type } : ICard) {

  const [showBlur, setShowBlur] = useState(false);

  const { addCart, removeCart, cart } = useContext(CartContext);
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845

  const variants : Variants = {
    show: {
      display: 'flex',
      width: "100%",
      height: "100%",
<<<<<<< HEAD
      content: 'initial', 
=======
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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

<<<<<<< HEAD

  return (
    <motion.div 
      onClick={onClick}
=======
  const linerBg = 'to-' + color + '-500/5'; 
  const shadow  = "shadow-"+color+"-500";
  const btnBgColor = "bg-"+color+"-500";
  const btnShadowColor = "shadow-" + color + '-500/50';
  const textPriceColor = 'text-' +color+'-500';

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
    <motion.div 

>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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
<<<<<<< HEAD
        ${selected && product.colors.linerBg}

        items-center px-8 pb-8 
       ${ selected ? 'opacity-100' : 'opacity-50'}
      `}>
            <div onMouseEnter={() => setShowBlur(true)} onMouseLeave={() => setShowBlur(false)}  className="flex justify-center items-center w-auto relative ">
              <div className="relative w-full h-[150px]">
                 <img  src={product.image} className={`transition ease-in-out h-auto w-full duration-300 shadow-lg ${selected && product.colors.shadow} ${ selected && 'scale-105'} `} alt={product.title + ' ' + product.description }/>
=======
        ${colors[color].linerBg}

        items-center px-8 pb-8 
       ${ selected ? 'opacity-100' : 'opacity-10'}
      `}>
            <div onMouseEnter={() => setShowBlur(true)} onMouseLeave={() => setShowBlur(false)}  className="flex justify-center items-center w-auto relative ">
              <div className="relative w-full h-[150px]">
                 <img  src={image} className={`transition ease-in-out h-auto w-full duration-300 shadow-lg ${selected && shadow} ${ selected && 'scale-105'} `} alt=''/>
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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
<<<<<<< HEAD
            <div className="flex flex-col justify-around h-full w-full pt-8">
=======
            <div className="flex flex-col justify-between h-full w-full pt-8">
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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
<<<<<<< HEAD
                    {product.title}
=======
                    {title}
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
                </h1>
               <div className="flex flex-col w-[250px] flex-1 py-2  justify-between">
                  <p className='max-w-sm text-secondary  font-medium font-prompt mb-10'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, architecto sapiente. Enim quos molestiae nihil at nisi similique assumenda vel totam...
                </p>
<<<<<<< HEAD
                <span className={`font-extrabold text-4xl font-satisfy ${product.colors.textPriceColor}`}>
                  R$ {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
=======
                <span className={`font-extrabold text-4xl font-satisfy ${colors[color].textPriceColor}`}>
                  R$ {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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
<<<<<<< HEAD
                    ${checkCart(product.type) ? ' bg-white text-slate-950 ' : 'text-secondary border-secondary'}
                   `}

                   onClick={() => {
                    checkCart(product.type)  ? removeCart(product.type) : addCart(product)
=======
                    ${cart.includes(type) ? ' bg-white text-slate-950 ' : 'text-secondary border-secondary'}
                   `}

                   onClick={() => {
                      cart.includes(type)  ? removeCart(type) : addCart(type)
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
                    }}
                  >
                    <FiShoppingBag size={25}/>
                  </button>
                  <button 
                    type={'button'} 
<<<<<<< HEAD
                    onClick={()=> router.push('/checkout?product=' + product.type)}
=======
                    
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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
<<<<<<< HEAD
                      ${ product.colors.btnBgColor}
=======
                      ${ colors[color].btnBgColor}
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
                  
                      text-white
                      shadow-sm

<<<<<<< HEAD
                     ${product.colors.btnShadowColor} 
=======
                     ${colors[color].btnShadowColor} 
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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