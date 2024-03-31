import React from 'react'
import { assets } from '../assets/assets'

function FoodItem({data}) {
  const {id, name, price, description, image} = data
  return (
    <div>
        <div>
            <img src={image} alt="dish image" />
        </div>
        <div>
            <div>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
        </div>
        <p>{description}</p>
        <p>${price}</p>
    </div>
  )
}

export default FoodItem