import axios from "axios";

export default async function login(data) {
    const { name, password } = data
    console.log(data)
    try {
        const res = await axios.post("https://server-1-g6p2.onrender.com/login", { name, password })
        const token = await res.data.token
        if (token)
            document.cookie = `token=${token}; max-age=${60 * 60}; path=/; samesite=strict`
        return token
    } catch (e) {
        if (e.response.status == 401)
            return { message: "Username or Password Incorrect" }
    }
}