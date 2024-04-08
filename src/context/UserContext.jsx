import axios from "axios"
import { createContext, useEffect, useState } from "react"
export const UserContext = createContext(null)
function UserContextProvider({ children }) {
    const token = document.cookie.replace("token=", "")
    const [user, setUser] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    async function verifyUserToken() {
        let req = await axios("https://server-1-g6p2.onrender.com/verify", {
            method: "GET",
            headers: {
                authorization: token
            }
        })
        let user = await req.data.data
        console.log(user)
        if (user) {
            setUser(user)
            setIsLogin(sta => !sta)
        }
    }

    useEffect(() => {
        if (token)
            verifyUserToken()
    }, [])

    console.log(user)

    let contextValue = {
        user,
        isLogin,
        setIsLogin
    }
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider