import { Inter } from 'next/font/google'
import Card, { ICard } from '@/components/Card'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import Cart from '@/components/Cart';
import InitialHome from '@/components/InitialHome';
import axios from 'axios';
import { IProduct } from '@/types/IProduct';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [view, setView] = useState("guy");
  const [products, setProducts] = useState<IProduct[]>([]);
  

  async function loadProducts(){
    const { data } = await axios.get('/api/products');
    setProducts(data.products);
  }


  useEffect(()=> {
    loadProducts();
  }, []);

  return (
    <>
     <div className="flex flex-col w-full h-full xl:h-full 2xl:h-screen bg-slate-950 items-center justify-start">
        <Cart/>
        <InitialHome/>
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
            <Button onClick={()=> setView("girl")} color='pink' selected={view == 'girl'}>
              CYBER GIRL
            </Button>
             <Button onClick={()=> setView("robot")} color='purple' selected={view == 'robot'}>
              CYBER ROBOT
            </Button>
            <Button onClick={()=> setView("guy")} color='sky' selected={view == 'guy'}>
              CYBER GUY
            </Button>  
        </div>
        </div>
        <div className="flex flex-nowrap w-full h-full overflow-x-auto">
           { products.map((product : IProduct) => <Card key={product.type} 
                                                        onClick={() => setView(product.type)}
                                                        product={product}
                                                        selected={view == product.type}/>)}
        </div>
     </div>
    </>
  )
}
