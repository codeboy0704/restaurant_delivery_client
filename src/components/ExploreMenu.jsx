import React from 'react'
import { menu_list } from '../assets/assets'
import Slider from 'react-slick'
import slideSettings from "../utils/slideSettings"
function ExploreMenu({ category, setCategory }) {
    return (
        <div className='flex flex-col gap-2' id='explore-menu'>
            <h1 className='text-[#262626] font-semibold text-[30px] text-center mb-[10px]'>Explore our menu</h1>
            <p className='hidden text-[#808080] text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam esse, optio voluptatem nisi, numquam excepturi expedita tempore distinctio vel laborum facere fuga, facilis eveniet. Iusto temporibus voluptatibus est laborum.</p>
            <div className='mx-2'>
                <Slider {...slideSettings} className='outline-none border-none'>
                    {menu_list.map((el, i) => {
                        return (
                            <div className='flex flex-col justify-center align-center border-none' onClick={() => setCategory(prev => prev === el.menu_name ? "All" : el.menu_name)} key={i}>
                                <img className={category === el.menu_name ? "select w-[7.8vw] min-w-[70px] pointer rounded-[50%]" : "w-[7.8vw] min-w-[80px] pointer rounded-xl"} src={el.menu_image} alt="" />
                                <p className='mt-[5px] mx-5 my-1 text-[#747474] pointer text-[1.4vw, 12px] '>{el.menu_name}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>

        </div>
    )
}

export default ExploreMenu