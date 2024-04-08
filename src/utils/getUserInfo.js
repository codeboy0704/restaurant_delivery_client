async function verifyUserToken(token){
    let req = await axios("https://server-1-g6p2.onrender.com/verify", {
        method: "GET",
        headers: {
            authorization: token
        }
    })
    let user = await req.data.payload
    return user
}