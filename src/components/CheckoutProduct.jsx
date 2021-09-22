import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import CurrencyFormat from 'react-currency-format'
import { removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';

function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  hasPrime
}) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
            <StarIcon 
              key={i} 
              className="h-5 text-yellow-500" 
            />
          ))}
        </div>

        <p 
          className="text-xs my-2 line-clamp-3"
        >
          {description}
        </p>
        <CurrencyFormat 
          value={price} 
          prefix={'$'}
          displayType={'text'}
          decimalScale={2}
          fixedDecimalScale={true}
        />

        {hasPrime && (
        <div className="flex items-center space-x-2">
          <img 
            className="w-12" 
            src="https://links.papareact.com/fdw" alt="" 
          />
          <p className="text-xs">FREE Next-day Delivery</p>
        </div>
      )}
      <div className="text-sm pt-2">
        <button 
          onClick={removeItemFromBasket}
          className="underline hover:text-blue-800"
        >
            Remove
          </button>
      </div>
      </div>
    </div>
  
  )}


export default CheckoutProduct
