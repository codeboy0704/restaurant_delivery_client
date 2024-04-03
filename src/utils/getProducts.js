import axios from "axios"

async function getProducts(){
    try{
        const res = await axios({
            method: "GET",
            url: "http://localhost:8000/product",
            headers: {
                "Content-Type" : "application/json",
                "Cache-control" : "no-cache"
            }
        })
        const data = await res.data.data
        return data
    }catch(e){
        console.error(e)
    }
}

export default getProducts