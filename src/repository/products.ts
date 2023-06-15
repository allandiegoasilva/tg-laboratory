import { IProduct } from "@/types/IProduct";


const products : IProduct[] = [
    {
      title: "Cyber Girl",
      description: "Descrição do cyber Guy",
      price: 199.90,
      discount: 0.0,
      color: 'sky',
      image: '/img/image-3.png',
      type: 'girl',
      colors:  {
        linerBg: 'to-pink-500/25',
        shadow: 'shadow-pink-500',
        btnBgColor: 'bg-pink-500',
        btnShadowColor: 'shadow-pink-500/50',
        textPriceColor: 'text-pink-500'
      }
    },
    {
      title: "Cyber Robot",
      description: "Descrição do cyber Robot",
      price: 324.90,
      discount: 0.0,
      color: 'purple',
      image: '/img/image-2.png',
      type: 'robot',
      colors: {
        linerBg: 'to-purple-500/25',
        shadow: 'shadow-purple-500',
        btnBgColor: 'bg-purple-500',
        btnShadowColor: 'shadow-purple-500/50',
        textPriceColor: 'text-purple-500'
      }
    },
    {
      title: "Cyber Guy",
      description: "Descrição do cyber Gy",
      price: 159.90,
      discount: 0.0,
      color: 'pink',
      image: '/img/image-1.png',
      type: 'guy',
      colors: {
        linerBg: 'to-sky-500/25',
        shadow: 'shadow-sky-500',
        btnBgColor: 'bg-sky-500',
        btnShadowColor: 'shadow-sky-500/50',
        textPriceColor: 'text-sky-500'
      }
    },
];



export const getByType = (type: string) : IProduct | undefined => {
  const product = products.find(item => item.type == type); 

  return product;
}

export default products; 