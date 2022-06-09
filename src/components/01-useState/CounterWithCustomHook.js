import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './CounterApp.css'

export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,reset} =  useCounter(100);

  return (
    <>
        <h2>Counter With Hooks: {counter}</h2>
        
        <button onClick={() => increment(2)} className="btn btn-info"> suma </button>
        <button onClick={() => reset()} className="btn btn-success"> reset </button>
        <button onClick={() => decrement(1)} className="btn btn-danger"> resta </button>
        <hr/>
    </>
  )
}
