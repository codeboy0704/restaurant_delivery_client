import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function UserInfo() {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div className='rounded-[15px] bg-red-300 text-center px-2 py-2 w-[40px] cursor-pointer'>
        <h3>{user.user[0].toUpperCase()}</h3>
    </div>
  )
}

export default UserInfo