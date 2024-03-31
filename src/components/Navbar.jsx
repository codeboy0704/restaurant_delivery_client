import React from 'react'
import { assets } from '../assets/assets'
export default function Navbar() {
  return (
    <div className='py-4 px-0 flex justify-between align-center'>
        <img className='logo w-32 h-10' src={assets.logo} alt="" />
        <ul className='flex gap-4 text-[#49557e] text-md'>
           <li>Home</li>
           <li>Menu</li>
           <li>Mobile-app</li>
           <li>Contact us</li> 
        </ul>
        <div className='flex align-center justify-center gap-12'>
            <div className='flex'>
             <img className='h-6 my-auto' src={assets.search_icon} alt="" />
            </div>
            <div className='flex'>
                <img className='my-auto h-7' src={assets.basket_icon} alt="" />
                <div></div>
            </div>
            <button className='bg-transparent rounded rounded-2xl text-md text-[#49557e] border-2 border-red-200 px-3 py2 hover:bg-[#fff4f2]'>Sign in</button>
        </div>
    </div>
  )
}
