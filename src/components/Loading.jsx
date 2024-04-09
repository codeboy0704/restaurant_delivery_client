import React from 'react'
import {assets} from "../assets/assets"
function Loading() {
  return (
    <div className='mx-auto w-[100%] col-span-4 flex justify-center'>
        <img src={assets.loading} alt="loading" />
    </div>
  )
}

export default Loading