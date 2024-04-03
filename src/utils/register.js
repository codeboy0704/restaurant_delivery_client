import axios from "axios";

 export default async function register(user){
    try{
        const res = await axios.post("http://localhost:8000/register", user)
        const token = await res.data.token
        if(token)
            document.cookie = `token=${token}; max-age=${60 * 60}; path=/; samesite=strict`
    }catch(e){

    }
}