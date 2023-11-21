"use client"
import { Button } from "./ui/button"
import { useDispatch } from "react-redux"
import { cartActions } from "@/store/slice/cartslice"
import toast from "react-hot-toast"

const AddToCart =() =>{
    const dispatch = useDispatch();
    const addItems =() =>{
        dispatch (cartActions.addToCart({quantity:1}))
        toast.success("product added")
    }
    return <Button onClick={addItems}>Add to cart</Button>
}
export default AddToCart