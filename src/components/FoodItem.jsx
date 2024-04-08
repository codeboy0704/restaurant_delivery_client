import React, { useContext, useLayoutEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import Loading from './Loading'

function FoodItem({ data }) {
    let token = document.cookie.replace("toke=", "")
    const { _id, name, price, description, image } = data
    const { cartItems, addToCart, removeFromCart} = useContext(StoreContext)
    const [foundOnCart, setFoundOnCart] = useState({_id: _id, quantity:0})
    useLayoutEffect(()=> {
         let found = cartItems.find(el => el._id == _id)
         setFoundOnCart(found)
    }, [cartItems])
    return (
        foundOnCart ? (
            <div className='w-[95%] sm:w-[100%] m-[auto] rounded shadow-food_item animate-fadeIn '>
            <div className='relative'>
                <img className='w-[100%] rounded-foodCart' src={image} alt="dish image" />
                {!foundOnCart.quantity?  <img className='w-[35px] absolute bottom-[20px] right-[15px]' onClick={() => addToCart(_id)} src={assets.add_icon_white} alt="" />
                    : (
                        <div className='absolute bottom-[15px] right-[15px] flex align-center gap-2 py-1 px-3 bg-white rounded-3xl'>
                            <img className="w-[30px]" onClick={() => removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
                            <p>{foundOnCart.quantity}</p>
                            <img className='w-[30px]' onClick={() => {
                                addToCart(_id)
                            }}
                                src={assets.add_icon_green}
                                alt="" />
                        </div>
                    )
                }
            </div>
            <div className='p-4'>
                <div className='flex justify-between align-center m-b-[10px]'>
                    <p className='text-[20px] font-medium'>{name}</p>
                    <img className='w-[80px] h-[22px]' src={assets.rating_starts} alt="" />
                </div>
                <p className='text-[#676767] text-[12px]'>{description}</p>
                <p className='text-red-400 font-medium my-2'>${price}</p>
            </div>
        </div>
        ): <Loading />
        
    )
}

export default FoodItem