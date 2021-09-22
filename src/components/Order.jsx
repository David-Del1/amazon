import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'

function Order({ 
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images
 }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p 
            className="font-bold text-xs"
          >
            ORDER PLACED
          </p>
          <p>
            {moment.unix(timestamp).format('DD MM YYYY')}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <CurrencyFormat
              value={amount} 
              prefix={'$'}
              displayType={'text'}
              decimalScale={2}
              fixedDecimalScale={true}
            /> - Next Day Delivery
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{items.length} items</p>
      </div>
    </div>
  )
}

export default Order
