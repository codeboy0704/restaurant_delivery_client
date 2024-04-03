import axios from "axios";

export default async function login(data) {
    const { name, password } = data
    console.log(data)
    try {
        const res = await axios.post("http://localhost:8000/login", { name, password })
        const token = await res.data.token
        if(token)
            document.cookie = `token=${token}; max-age=${60 * 60}; path=/; samesite=strict`
        return token
    } catch (e) {

    }
}