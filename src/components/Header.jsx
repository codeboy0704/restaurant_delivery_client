import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='flex absolute flex-col align-start gap-[1.6vw] w-[50%] bottom-[10%] leff-[6vw] px-4 animate-fadeIn'>
            <h2 className='font-medium text-white text-xl'>Order your favorite food here</h2>
            <p className='text-white text-[1.2vw]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quia hic odit necessitatibus aliquid doloremque, aspernatur maiores a. Delectus eos cupiditate reiciendis sint animi nobis quam in officia enim maxime.</p>
            <button className='text-[#747474] font-medium bg-white rounded-2xl w-32 py-2 '>View Menu</button>
        </div>
    </div>
  )
}

export default Header