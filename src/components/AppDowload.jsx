import React from 'react'
import { assets } from '../assets/assets'

function AppDowload() {
  return (
    <div id='app-download' className='my-auto mx-auto mt-[30px] text-[40px] text-center'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className='flex justify-center gap-4 mt-[40px]'>
            <img className='cursor-pointer transition ease-in-out delay-180 max-w-[180px] w-[maz(30vw, 120px)] hover:scale-105' src={assets.play_store} alt="play store" />
            <img className='cursor-pointer transition ease-in-out delay-180 max-w-[180px] w-[maz(30vw, 120px)] hover:scale-105' src={assets.app_store} alt="app store" />
        </div>
    </div>
  )
}

export default AppDowload