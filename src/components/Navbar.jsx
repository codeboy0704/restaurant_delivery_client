import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import UserInfo from './UserInfo'
export default function Navbar({ setShowLogin }) {
    const [menu, setMenu] = useState("home")
    const {isLogin, setIsLogin} = useContext(UserContext)
    return (
        <div className='py-4 px-0 flex justify-between align-center md:gap-2'>
            <Link to="/">
                <img className='logo my-auto w-[100px] h-[45px] h-10 md:w-[120px]' src={assets.logo} alt="logo" />
            </Link>
            <ul className='flex gap-[20px] sm:gap-4 text-[#49557e] text-[17px] hidden md:flex'>
                <li onClick={() => setMenu("home")} className={menu == "home" ? "active my-auto" : "my-auto"}><a href='/'>Home</a></li>
                <li onClick={() => setMenu("menu")} className={menu == "menu" ? "active my-auto" : "my-auto"}><a href='#explore-menu'>Menu</a></li>
                <li onClick={() => setMenu("mobile-app")} className={menu == "mobile-app" ? "active my-auto" : "my-auto"}><a href='#app-download'>Mobile-App</a></li>
                <li onClick={() => setMenu("contact")} className={menu == "contact" ? "active my-auto" : "my-auto"}><a href='#footer'>Contact Us</a></li>
            </ul>
            <div className='flex align-center justify-center gap-5 md:gap-4'>
                {/* <div className='flex'>
                    <img className='my-auto w-[25px] md:w-[20px]' src={assets.search_icon} alt="" />
                </div> */}
                <div className='flex relative'>
                    <Link to="/cart" className='h-[32px] flex pt-2'>
                        <img className='my-auto w-[25px] md:w-[28px]' src={assets.basket_icon} alt="" />
                    </Link>
                    <div className='dot'></div>
                </div>
                {isLogin ? <UserInfo /> :  <button onClick={() => setShowLogin(sta => !sta)} className='md:w-[80px] bg-[#e5575b] rounded rounded-3xl text-md text-[#fff] border-2 font-semi-bold  border-red-200 px-4 py-[2px] hover:bg-[#c24549] transition duration-150 ease-out hover:scale-105'>Sign in</button>}
            </div>
        </div>
    )
}
