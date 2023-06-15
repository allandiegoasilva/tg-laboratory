// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IProduct } from '@/types/IProduct';
import type { NextApiRequest, NextApiResponse } from 'next'
import Products from '../../../repository/products';
type Data = {
  products: IProduct[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) 
{
  
  res.status(200).json({
    products: Products
  });
}
