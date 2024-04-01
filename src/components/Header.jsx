import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='flex absolute max-w-[95%] sm:max-w-[70%] flex-col align-start gap-[1.1vw] bottom-[10%] leff-[6vw] px-4 animate-fadeIn'>
            <h2 className='font-medium text-white text-[32px] sm:text-[40px]'>Order your favorite food here</h2>
            <p className='hidden sm:inline sm:text-[1.9vw] sm:mb-[12px] text-white text-[1.2vw]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quia hic odit necessitatibus aliquid doloremque, aspernatur maiores a. Delectus eos cupiditate reiciendis sint animi nobis quam in officia enim maxime.</p>
            <button className='text-[#747474] font-medium bg-white rounded-2xl w-24 py-[7px] '>View Menu</button>
        </div>
    </div>
  )
}

export default Header