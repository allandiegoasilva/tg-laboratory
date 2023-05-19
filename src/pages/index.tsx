import { Inter } from 'next/font/google'
import Card, { ICard } from '@/components/Card'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import Cart from '@/components/Cart';
import SectionOne from '@/components/SectionOne';
import axios from 'axios';
import { ImSpinner6 } from 'react-icons/im';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [view, setView] = useState("guy");
  const [cards, setCards] = useState<ICard[]>([]);
  

  async function fetchProducts() {
    const { data } = await axios.get('/api/products');

    setCards(data);
  }


  useEffect(()=> {
    fetchProducts();
  }, []);

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
              text-bolder'>
              Principais personagens:
            </h1>
           <div className="flex h-full self-center items-center justify-center py-3 px-8 w-full gap-2">
            <Button onClick={()=> setView("girl")} color='sky' selected={view == 'girl'}>
              CYBER GIRL
            </Button>
             <Button onClick={()=> setView("robot")} color='purple' selected={view == 'robot'}>
              CYBER ROBOT
            </Button>
            <Button onClick={()=> setView("guy")} color='pink' selected={view == 'guy'}>
              CYBER GUY
            </Button>  
        </div>
        </div>
        <div className="flex flex-nowrap w-full h-full overflow-x-auto">
           { cards.map((card : ICard, index : number) => <Card key={index} 
                                                              title={card.title} 
                                                              description={card.description}
                                                              color={card.color}
                                                              image={card.image}
                                                              price={card.price}
                                                              selected={view == card.type}
                                                              type={card.type}
                                                              />)}
        </div>
     </div>
    </>
  )
}
