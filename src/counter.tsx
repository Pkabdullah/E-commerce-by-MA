"use client"
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/slice/cartslice";
import { RootState } from "./store/store";


const CounterView=()=>{
    const dispatch = useDispatch()

    const counterValue= useSelector((state:RootState) =>state.cart.totalAmount);

    const increment =() =>{
        dispatch(counterActions.increment);
    };

    const decrement =() =>{
        dispatch(counterActions.decrement)
    };
   
}
export default CounterView