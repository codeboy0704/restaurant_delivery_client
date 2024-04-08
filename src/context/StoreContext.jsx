import { createContext, useEffect, useState } from "react";
import axios from "axios";
import getProducts from "../utils/getProducts";
import { food_list_images } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [foodList, setFoodList] = useState([])
    const [item, setItem] = useState({})
    const [foundOnCart, setFoundOnCart] = useState({})
    const matchImagesWithProducts = async () =>{
        let products = await getProducts()
        console.log(products)
        let match = products.map(el => {
            let img = food_list_images.find(img => img.name.toLocaleLowerCase().trim() == el.name.toLocaleLowerCase().trim())
            if (img)
                el = { ...el, image: img.image }
            return el
        })
        setFoodList(match)
    }
    async function checkProductsOnCart() {
        try {
            const products  = await getProducts()
            let abstractSpecificData = products.map(el => {
                const { _id, quantity } = el
                return { _id, quantity: quantity || 0 }
            })
            setCartItems(abstractSpecificData)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        matchImagesWithProducts()
    }, [cartItems])


    async function updateAddProductQuantity(_id) {
        try {
            let findOnCurrentItems = cartItems.find(el => el._id === _id)
            setItem(findOnCurrentItems)
            if (findOnCurrentItems) {
                findOnCurrentItems.quantity = findOnCurrentItems.quantity + 1
                const req = await axios.put("https://server-1-g6p2.onrender.com/product/cart", { _id: _id, quantity: findOnCurrentItems.quantity })
                const res = await req.data.data
                setItem({_id: res._id, quantity: res.quantity})
                findOnCurrentItems = item
            }
        } catch (e) {
            console.error(e)
        }
    }

    async function updateRemoveProductQuantity(_id){
        try{
            let findOnCurrentItems = cartItems.find(el => el._id === _id)
            setItem(findOnCurrentItems)
            if (findOnCurrentItems) {
                findOnCurrentItems.quantity = findOnCurrentItems.quantity -1
                const req = await axios.put("https://server-1-g6p2.onrender.com/product/cart", { _id: _id, quantity: findOnCurrentItems.quantity })
                const res = await req.data.data
                setItem({_id: res._id, quantity: res.quantity})
                findOnCurrentItems = item
            }
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        checkProductsOnCart()
    }, [])

    async function addToCart(id) {
        try {
            await updateAddProductQuantity(id)
        } catch (e) {
            console.error(e)
        }
    }

    async function removeFromCart(id) {
        try{
            await updateRemoveProductQuantity(id)
        }catch(e){
            console.error(e)
        }
    }

    const contextValue = {
        food_list: foodList,
        cartItems,
        setCartItems,
        removeFromCart,
        addToCart,
        setFoundOnCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider