// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const products : any =  [
    {
      title: "Cyber Girl",
      description: "Descrição do cyber Guy",
      price: 199.90,
      color: 'sky',
      image: '/img/image-3.png',
      type: 'girl'
    },
    {
      title: "Cyber Robot",
      description: "Descrição do cyber Robot",
      price: 324.90,
      color: 'purple',
      image: '/img/image-2.png',
      type: 'robot',
    },
    {
      title: "Cyber Guy",
      description: "Descrição do cyber Gy",
      price: 159.90,
      color: 'pink',
      image: '/img/image-1.png',
      type: 'guy'
    },
  ];
  res.status(200).json(products);
}
