<<<<<<< HEAD
import CartProvider from '@/hooks/CartProvider'
=======
import CartProvider from '@/@hooks/CartProvider'
>>>>>>> 908a45eac4105e0cb91c205b1b195812bd207845
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>);
}
