import React, { useState } from 'react'
import { assets } from '../assets/assets'
export default function Navbar() {
    const [menu, setMenu] = useState("home")
  return (
    <div className='py-4 px-0 flex justify-between align-center md:gap-2'>
        <img className='logo my-auto w-[100px] h-[40px] h-10 md:w-[110px]' src={assets.logo} alt="" />
        <ul className='flex gap-[20px] sm:gap-4 text-[#49557e] text-[17px] hidden md:flex'>
           <li onClick={()=> setMenu("home")} className={menu == "home" ? "active my-auto" : "my-auto"}>Home</li>
           <li onClick={()=> setMenu("menu")} className={menu == "menu" ? "active my-auto" : "my-auto"}>Menu</li>
           <li onClick={()=> setMenu("mobile-app")} className={menu == "mobile-app" ? "active my-auto" : "my-auto"}>Mobile-app</li>
           <li onClick={()=> setMenu("contact")} className={menu == "contact" ? "active my-auto" : "my-auto"}>Contact us</li> 
        </ul>
        <div className='flex align-center justify-center gap-8 md:gap-4'>
            <div className='flex'>
             <img className='my-auto w-[25px] md:w-[20px]' src={assets.search_icon} alt="" />
            </div>
            <div className='flex relative'>
                <img className='my-auto w-[25px] md:w-[20px]' src={assets.basket_icon} alt="" />
                <div className='dot'></div>
            </div>
            <button className='md:w-[80px] bg-transparent rounded rounded-3xl text-md text-[#49557e] border-2 border-red-200 px-3 py-1 hover:bg-[#fff4f2] transition duration-150 ease-out hover:ease-in'>Sign in</button>
        </div>
    </div>
  )
}
