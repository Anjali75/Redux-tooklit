import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../../redux/counterSlice'

export default function Cart() {
    let dispatch = useDispatch()
  return (
    <div>
      <h1>Cart</h1>
       <button onClick = {()=>{
        dispatch(decrement())
      }}
      className = 'p-3 bg-red-500'>change decrement</button>
    </div>
  )
}
