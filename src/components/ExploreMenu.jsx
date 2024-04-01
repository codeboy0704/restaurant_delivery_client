import React from 'react'
import { menu_list } from '../assets/assets'
function ExploreMenu({category, setCategory}) {
  return (
    <div className='flex flex-col gap-3' id='explore-menu'>
        <h1 className='text-[#262626] font-semibold text-[30px] text-center'>Explore our menu</h1>
        <p className='hidden text-[#808080] text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam esse, optio voluptatem nisi, numquam excepturi expedita tempore distinctio vel laborum facere fuga, facilis eveniet. Iusto temporibus voluptatibus est laborum.</p>
        <div className='flex justify-between align-center gap-[40px] text-center no_scroll my-4'>
            {menu_list.map((el,i)=> {
                return (
                    <div onClick={()=> setCategory(prev => prev === el.menu_name ? "All": el.menu_name)} key={i}>
                        <img className={category === el.menu_name? "select w-[7.8vw] min-w-[80px] pointer rounded-[50%]" : "w-[7.8vw] min-w-[80px] pointer rounded-xl"} src={el.menu_image} alt="" />
                        <p className='m-t-[10px] text-[#747474] pointer text-[1.4vw, 16px] '>{el.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='mx-[10px] h-[3px] bg-[#e2e2e2]' />
    </div>
  )
}

export default ExploreMenu