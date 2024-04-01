import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col align-center gap-4 py-[10px] px-[8vw] pt-[80px] my-4' id='footer'>
        <div className='grid w-[100%] grid-cols-footer gap-[80px] align-center justify-center'>
            <div className='flex flex-col align-start gap-[20px]'>
                <img className='w-32' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ullam incidunt, adipisci obcaecati sint voluptates quam repudiandae provident doloremque. Nesciunt aspernatur, optio non quisquam provident suscipit totam reiciendis quaerat ut!</p>
                <div className='flex gap-4'>
                    <img className='cursor-pointer' src={assets.facebook_icon} alt="" />
                    <img className='cursor-pointer' src={assets.twitter_icon} alt="" />
                    <img className='cursor-pointer' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col align-start gap-[20px] text-center my-2'>
                <h2>Company</h2>
                <ul className='flex flex-col gap-3 justify-center align-center'>
                    <li className='text-center cursor-pointer'>Home</li>
                    <li className='text-center cursor-pointer'>About us</li>
                    <li className='text-center cursor-pointer'>Delivery</li>
                    <li className='text-center cursor-pointer'>Privacy policy</li>
                </ul>
            </div>
            <div className='flex flex-col align-center text-center gap-[20px]'>
                <h2>GET IN TOUCH</h2>
                <ul className='flex flex-col gap-3 font-medium'>
                    <li className='cursor-pointer'>+507 60568927</li>
                    <li className='cursor-pointer'>bambinos@restaurant.com</li>
                </ul>
            </div>
            <hr className='col-span-3 h-[20px]' />
            <div className='col-span-3 text-center'>
              <p>Copyright 2024 Bambinos.com - All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer