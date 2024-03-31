import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food_display_list">
            {food_list.map((food, i) => {
                return (
                    <FoodItem key={i} data={food}/>
                )
            })}
        </div>
    </div>
  )
}

export default FoodDisplay