import { Inter } from 'next/font/google'
import Card, { ICard } from '@/components/Card'
import Button from '@/components/Button'

import image1 from '../images/image-1.png';
import image2 from '../images/image-2.png';
import image3 from '../images/image-3.png';
import { FiShoppingBag } from 'react-icons/fi';
import { useState } from 'react'

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
     <div className="flex flex-col w-full h-screen bg-slate-950 items-center justify-start">
        <div className="flex justify-end w-full bg-slate-950/50 py-2 px-32">
          <FiShoppingBag size={25} className='text-white'/>
        </div>
        <h1 className='
          font-satisfy 
          text-7xl
          text-transparent
          bg-gradient-to-b
          from-slate-100 
          to-white
          bg-clip-text
          text-bolder
          '>
          CYBER Store 
        </h1>
        <div className="flex flex-col text-lg font-prompt mb-8 w-full text-secondary opacity-95 text-center">
          <p>  Procurando os melhores NFTs cyberpunk para amigos, colegas ou familiares?</p>
          <p>Não procure mais! Compre aqui os melhores NFTs que você já viu!</p>
          <p>Estamos anciosos para ter você.</p>
        </div>
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
           <div className="flex h-full items-center justify-center py-3 px-8 w-full gap-2">
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
                                                              />)
           }
        </div>
     </div>
    </>
  )
}
