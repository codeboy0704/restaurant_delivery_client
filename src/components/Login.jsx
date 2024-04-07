import React, { useState } from 'react'
import { assets } from '../assets/assets'
import login from '../utils/login'
import register from '../utils/register'

function Login({ setShowLogin }) {
    const [currState, setCurrState] = useState("Login")
    const [email, setEmail] = useState("")
    const [check, setCheck] = useState(false)
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const loginOptions = () => {
        if(currState === "Login" && check){
            return login({ name: name, password: password })
        }else if(check){
            return register({ name, email, password })
        }
    }
    return (
        <div className='fixed z-40 w-[100%] h-[100%] bg-[#00000090] grid text-center'>
            <form onSubmit={(e)=> e.preventDefault()} className='place-self-center w-[max(23vw,350px)] text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fadeIn'>
                <div className='flex justify-between align-center text-black'>
                    <h2 className='text-[32px]'>{currState}</h2>
                    <img className='w-[20px] h-[22px] my-auto cursor-pointer' onClick={() => setShowLogin(sta => !sta)} src={assets.cross_icon} alt="" />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <input className='border-b-[2px] border-red-300  border-[#c9c9c9] py-1 px-2 rounded-md focus:outline-none focus:scale-[1.1] transition duration-150 ease-out' type="text" placeholder='Your name' onChange={(e) => setName(e.target.value.trim())} required />
                    {currState === "Login" ? <></> : <input className='border-b-[2px] border-red-300 py-1 px-2 rounded-md focus:outline-none focus:scale-[1.1] transition duration-150 ease-out' type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value.trim().toLowerCase())} required />}
                    <input className='border-b-[2px] border-red-300 py-1 px-2 rounded-md focus:outline-none focus:scale-[1.1] transition duration-150 ease-out' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value.trim())} required />
                </div>
                <button onClick={() => {
                    let login = loginOptions()
                    login ? setTimeout(()=> setShowLogin(sta => !sta), 2000 ) : null
                }} className='bg-red-400 w-32 text-center mx-auto rounded-md py-1 px-2 text-white font-medium text-[17px]'>{currState == "Sign Up" ? "Create Account" : "Log In"}</button>
                <div className='flex gap-[2px] text-center align-center justify-center'>
                    <input onChange={() => setCheck(sta => !sta)} className='w-[22px]' type="checkbox" required />
                    <p className='text-[12px] mt-[18px]'>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState == "Login" ? <p>Create a new account? <span className='text-red-400 cursor-pointer' onClick={() => setCurrState("Sign up")}>Click me</span></p> : <p>Already gave an account? <span className='text-red-400 cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>}
            </form>
        </div>
    )
}

export default Login