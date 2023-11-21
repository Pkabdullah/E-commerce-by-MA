"use client"
import { useState } from "react"
const quantity = () => {
    const [num,setNum]=useState (1);

    // let num = 1;
  return (
    <div className='flex gap-x-2 items-center'>
        {/* minus */}
        <button 
         className='border h-6 w-6 rounded-full center '
         onClick={()=>{
            
            setNum( num <=1 ? 1: num-1)
        }}
        >
        -
         </button>

        {/* number */}
         <span className='text-sm'>{num}</span>




        {/* plus */}
        <button className='border h-6 w-6 rounded-full center' 
        onClick={()=>{
            
            setNum(num+1)
        }}
        >
            +
            </button>
    </div>
  )
}

 export default quantity

// export const  OperationButton = ()=>{
//     return  <div className='border h-6 w-6 rounded-full center '>-</div>
// } ;