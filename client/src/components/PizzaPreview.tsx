import React from 'react'
import { PizzaPreviwType } from '../pages/Menu'
import Button from './Button'


type PizzaPreviewProps = {
  pizza: PizzaPreviwType
}

const PizzaPreview = (props: PizzaPreviewProps) => {
  const { pizza } = props;
  return (
    <div key={pizza.id} className='max-w-[450px] flex flex-col  gap-4 bg-primary-mellow rounded overflow-hidden pb-4 shadow-2xl  hover:-translate-y-1 duration-300 transition-transform ' >
      <div className='max-h-[200px] '>
        <img className=' object-cover w-full h-full ' src={pizza.image} alt={pizza.name} />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-center">{pizza.name}</h3>
          <h3 className="text-xl font-bold text-center">${pizza.price}</h3>
          <Button isLinked={false} name='Order now' styles={'text-white'} />
        </div>
        
      </div>
    </div>
  )
}

export default PizzaPreview