import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function UserInfo() {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div className='rounded-[15px] bg-red-300 text-center px-4 py-2 cursor-pointer'>{user.user[0].toUpperCase()}</div>
  )
}

export default UserInfo