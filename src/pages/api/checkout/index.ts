import { STATUS_CODES } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let products = req.body.products;

  if(req.body?.discount){
    if(isNaN(req.body?.discount)){
      return res.status(401).json({
        success: false,
        message: "Informe um valor numério para o desconto."
      });
    }
  }

  if(!Array.isArray(products)) {
    return res.status(401).json({
      success: false, 
      message: "Informe ao mínimo um produto para realizar a compra!"
    });
  }

  /* const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15"
  }); */

 /*  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ['card'],
    line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 2000,
            product_data: {
              name: 'T-shirt',
              description: 'Comfortable cotton t-shirt',
              images: ['https://blog.portalpos.com.br/app/uploads/2022/09/licoes-do-futebol-768x432.jpg'],
            },
          },
        quantity: 1,
      },
        {
          price_data: {
            currency: 'usd',
            unit_amount: 0,
            product_data: {
              name: 'T-shirt',
              description: 'Comfortable cotton t-shirt',
              images: ['https://blog.portalpos.com.br/app/uploads/2022/09/licoes-do-futebol-768x432.jpg'],
            },
          },
        quantity: 1,
      },
    ],
   success_url: process.env.BASE_URL + '/success',
   cancel_url: process.env.BASE_URL + '/cancel',
 }); */


 
  let session = {};
  res.status(200).json({ session });
}
