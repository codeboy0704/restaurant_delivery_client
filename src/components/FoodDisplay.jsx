import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='mt-[40px]' id='food-display'>
            <h2 className='text-[28px] font-medium my-4'>Top dishes near you</h2>
            <div className="grid grid-cols-display m-t-[30px] gap-[20px]">
                {food_list.map((food, i) => {
                    if (category === "All" || category === food.category) {
                        return (
                            <FoodItem key={i} data={food} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay