import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);
    // const increment = () =>{
    //     setCounter(counter + 1)
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num)
    },[setCounter]);

    useEffect(() =>{
        //¿?
    },[increment]);

  return (
    <div>
        <hr/>
        <h2>useCallBack Hook: {counter}</h2>
        
        <ShowIncrement  increment={increment}/>

    </div>
  )
}
