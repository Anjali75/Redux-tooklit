import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/counterSlice'

export default function Home() {

    let dispatch = useDispatch()
  return (
    <div>
      <h1>Home</h1>
      <button onClick = {()=>{
        dispatch(increment())
      }}
      className = 'p-3 bg-red-500'>change increment</button>
    </div>
  )
}
