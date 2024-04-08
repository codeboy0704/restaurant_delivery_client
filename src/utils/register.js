import axios from "axios";

 export default async function register(user){
    try{
        const res = await axios.post("https://server-1-g6p2.onrender.com/register", user)
        const token = await res.data.token
        if(token)
            document.cookie = `token=${token}; max-age=${60 * 60}; path=/; samesite=strict`
    }catch(e){
        
    }
}