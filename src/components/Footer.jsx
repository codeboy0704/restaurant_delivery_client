import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='text-[#d9d9d9] bg-[#323232] flex flex-col align-center gap-6 py-[10px] px-[8vw] pt-[80px] mt-6' id='footer'>
            <div className='grid grid-cols-3 gap-2 '>
                <div className='flex mb-4 col-span-3 sm:col-span-2 flex-col align-start justify-center gap-[20px]'>
                    <div className='mx-auto sm:mx-[2px]'>
                        <img className='w-48' src={assets.logo} alt="" />
                    </div>
                    <p className='hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ullam incidunt, adipisci obcaecati sint voluptates quam repudiandae provident doloremque. Nesciunt aspernatur, optio non quisquam provident suscipit totam reiciendis quaerat ut!</p>
                    <div className='flex gap-4 justify-center sm:justify-normal'>
                        <a href='https://www.facebook.com/' target='_blank'>
                            <img className='cursor-pointer' src={assets.facebook_icon} alt="facebook" />
                        </a>
                        <a href="https://twitter.com/" target='_blank'>

                            <img className='cursor-pointer' src={assets.twitter_icon} alt="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/ian-flores-31349024a/" target='_blank'>
                            <img className='cursor-pointer' src={assets.linkedin_icon} alt="lindedin"/>
                        </a>
                    </div>
                </div>
                <div className='flex col-span-3 mb-4 sm:col-span-1 flex-col justify-center text-center gap-[20px]'>
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