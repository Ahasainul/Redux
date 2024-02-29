import React from 'react'
import Btn from './Btn'
import { useDispatch } from 'react-redux'
import { decrement } from '../features/counter/counterSlice'

const Btnto = ({BtnName,className}) => {
    const dispatch = useDispatch()
    const mines = ()=>{
        dispatch(decrement())
    }
  return (
   <>

  <button className={`font-bold text-5xl px-5 py-5 rounded-full border-4 border-yellow-500 ${className} ` } onClick={mines}>{BtnName}</button>
   
   </>
  )
}

export default Btnto