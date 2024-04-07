import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

function Cart() {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext)
    return (
        <div className='mt-[100px]'>
            <div className='flex flex-col justify-center align-center text-center'>
                <div className='grid grid-cols-cart align-center text-grey-300 text-[max(1vw,12px)]'>
                    <p className='hidden sm:inline'>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br className='py-[10px]' />
                <hr className='bg-[#e2e2e2] border-none' />
                {food_list.map((el, i) => {
                    let found = cartItems.find(item => item._id === el._id)
                    if (found.quantity > 0) {
                        return (
                            <div>
                                <div className='grid grid-cols-cart align-center text-center text-grey-300 text-[max(1vw,12px)] my-[10px] text-black'>
                                    <img className='w-[80px] mx-auto rounded-xl hidden sm:inline' src={el.image} alt="product image" />
                                    <p>{el.name}</p>
                                    <p>${el.price}</p>
                                    <p>{found.quantity}</p>
                                    <p>${el.price * found.quantity}</p>
                                    <p onClick={()=> removeFromCart(el._id)} className='cursor-pointer'>X</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Cart