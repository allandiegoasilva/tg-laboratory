import { Inter } from 'next/font/google'
import Card, { ICard } from '@/components/Card'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import Cart from '@/components/Cart';
<<<<<<< HEAD
import InitialHome from '@/components/InitialHome';
import axios from 'axios';
import { IProduct } from '@/types/IProduct';
=======
import SectionOne from '@/components/SectionOne';
import axios from 'axios';
import { ImSpinner6 } from 'react-icons/im';
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [view, setView] = useState("guy");
<<<<<<< HEAD
  const [products, setProducts] = useState<IProduct[]>([]);
  

  async function loadProducts(){
    const { data } = await axios.get('/api/products');
    setProducts(data.products);
=======
  const [cards, setCards] = useState<ICard[]>([]);
  

  async function fetchProducts() {
    const { data } = await axios.get('/api/products');

    setCards(data);
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
  }


  useEffect(()=> {
<<<<<<< HEAD
    loadProducts();
=======
    fetchProducts();
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
  }, []);

  return (
    <>
<<<<<<< HEAD
     <div className="flex flex-col w-full h-full xl:h-full 2xl:h-screen bg-slate-950 items-center justify-start">
        <Cart/>
        <InitialHome/>
=======
     <div className="flex flex-col w-full h-full bg-slate-950 items-center justify-start">
        <Cart/>
        <SectionOne/>
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
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
<<<<<<< HEAD
            <Button onClick={()=> setView("girl")} color='pink' selected={view == 'girl'}>
=======
            <Button onClick={()=> setView("girl")} color='sky' selected={view == 'girl'}>
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
              CYBER GIRL
            </Button>
             <Button onClick={()=> setView("robot")} color='purple' selected={view == 'robot'}>
              CYBER ROBOT
            </Button>
<<<<<<< HEAD
            <Button onClick={()=> setView("guy")} color='sky' selected={view == 'guy'}>
=======
            <Button onClick={()=> setView("guy")} color='pink' selected={view == 'guy'}>
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
              CYBER GUY
            </Button>  
        </div>
        </div>
        <div className="flex flex-nowrap w-full h-full overflow-x-auto">
<<<<<<< HEAD
           { products.map((product : IProduct) => <Card key={product.type} 
                                                        onClick={() => setView(product.type)}
                                                        product={product}
                                                        selected={view == product.type}/>)}
=======
           { cards.map((card : ICard, index : number) => <Card key={index} 
                                                              title={card.title} 
                                                              description={card.description}
                                                              color={card.color}
                                                              image={card.image}
                                                              price={card.price}
                                                              selected={view == card.type}
                                                              type={card.type}
                                                              />)}
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
        </div>
     </div>
    </>
  )
}
