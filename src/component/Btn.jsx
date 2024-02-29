import React from 'react'
import { increment } from '../features/counter/counterSlice'
import { useDispatch } from 'react-redux'
const Btn = ({btnName,className}) => {
    const dispatch = useDispatch()
    const plus = ()=>{
        dispatch(increment())
    }
  return (
   <>
   <button className={`font-bold text-5xl px-5 py-5 rounded-full border-4 border-yellow-500 ${className} `} onClick={plus}>{btnName}</button>
   </>
  )
}

export default Btn