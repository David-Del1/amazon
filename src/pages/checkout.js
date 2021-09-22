import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/client';
import { selectTotal } from '../slices/basketSlice';
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems)
  const [session] = useSession();
  const total = useSelector(selectTotal)

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call backend to create checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', 
    {
      items: items,
      email: session.user.email,
    });

    // redirect customer to Strip checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message)
  }


  return (
    <div className="bg-gray-100">
    <Header />
    <main className="lg:flex max-w-screen-2xl mx-auto">
      <div className="flex-grow m-5 shadow-sm">
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          objectFit="contain"
        />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 
            className="text-3xl border-b pb-4"
          >
            {items.length ? 'Your Shopping Cart' : 'Your Cart is empty.'}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct 
              key={i}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))}
        </div>
      </div>

      <div>
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">
                <CurrencyFormat
                  value={total} 
                  prefix={'$'}
                  displayType={'text'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </span>
            </h2>

            <button 
              role="link" 
              onClick={createCheckoutSession}
              className={`button mt-2 ${!session && 'from-gray-400 to-gray-500 border-gray-300 cursor-not-allowed'
              }`}
            >
              {!session ? 'Sign In to Checkout' : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </main>
    </div>
  );
}

export default Checkout;
