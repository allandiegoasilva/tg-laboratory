import { Inter } from 'next/font/google'
import Card, { ICard } from '@/components/Card'
import Button from '@/components/Button'

import image1 from '../images/image-1.png';
import image2 from '../images/image-2.png';
import image3 from '../images/image-3.png';
import { FiShoppingBag } from 'react-icons/fi';
import { useState } from 'react'
import Cart from '@/components/Cart';
import SectionOne from '@/components/SectionOne';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [view, setView] = useState("guy");

  const cards : ICard[] = [
    {
      title: "Cyber Guy",
      description: "Descrição do cyber Guy",
      price: 199.90,
      color: 'sky',
      image: image1,
      type: 'girl'
    },
    {
      title: "Cyber Robot",
      description: "Descrição do cyber Robot",
      price: 324.90,
      color: 'purple',
      image: image2,
      type: 'robot',
    },
    {
      title: "Cyber Guy",
      description: "Descrição do cyber Gy",
      price: 159.90,
      color: 'pink',
      image: image3,
      type: 'guy'
    },
  ];

  return (
    <>
     <div className="flex flex-col w-full h-full bg-slate-950 items-center justify-start">
        <Cart/>
        <SectionOne/>
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-3 lg:gap-0 w-full bg-slate-900/50 justify-center lg:px-0">
             <h1 className='
              font-satisfy 
              text-4xl
              lg:text-7xl
              text-transparent
              bg-gradient-to-b
              from-slate-100 
              to-white
              bg-clip-text
              text-bolder
              
              '>
              Principais personagens:
            </h1>
           <div className="flex h-full self-center items-center justify-center py-3 px-8 w-full gap-2">
            <Button onClick={()=> setView("girl")} color='sky'>
              CYBER GIRL
            </Button>
             <Button onClick={()=> setView("robot")} color='red'>
              CYBER ROBOT
            </Button>
            <Button onClick={()=> setView("guy")} color='green'>
              CYBER GUY
            </Button>  
        </div>
        </div>
        <div className="flex flex-nowrap w-full h-full overflow-x-auto">
           {
            cards.map((card : ICard, index : number) => <Card key={index} 
                                                              title={card.title} 
                                                              description={card.description}
                                                              color={card.color}
                                                              image={card.image}
                                                              price={card.price}
                                                              selected={view == card.type}
                                                              type={card.type}
                                                              />)
           }
        </div>
     </div>
    </>
  )
}
