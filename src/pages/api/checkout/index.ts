import { IProduct } from '@/types/IProduct';
import { STATUS_CODES } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let products = req.body.products;
  let discount = false;

  if(req.body?.discount){
    if(isNaN(req.body?.discount)){
      return res.status(401).json({
        success: false,
        message: "Informe um valor numério para o desconto."
      });
    }

    discount = req.body.discount;
  }

  if(!Array.isArray(products)) {
    return res.status(401).json({
      success: false, 
      message: "Informe ao mínimo um produto para realizar a compra!"
    });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15"
  });


  products = products.map((product: IProduct) => {

    let price = product.price;

    if(typeof discount == "number") {
      price = price - ((discount / 100)  * price); 
    }

    let stripeProduct = {
        price_data: {
          currency: 'brl',
          unit_amount: Math.floor(price * 100),
          product_data: {
            name: product.title,
            description: product.description,
            images: [process.env.BASE_URL + product.image],
          },
        },
      quantity: 1,
    };

    return stripeProduct;
  });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ['card'],
    line_items: products,
    success_url: process.env.BASE_URL + '/success',
    cancel_url: process.env.BASE_URL + '/cancel',
 });

  res.status(200).json({ success: true, uri: session.url });
}
