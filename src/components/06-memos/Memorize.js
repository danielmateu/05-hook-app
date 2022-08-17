import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const {counter,increment} = useCounter(10);
    const [show, setShow] = useState(true)

  return (
    <div>
        <hr/>
        <h2>Memorize</h2>
        <h3>Counter: <Small value={counter}/></h3>

        <button 
        className="btn btn-success"
        onClick={increment}>
            incrementar
        </button>

        <button 
        className='btn btn-info'
        onClick={()=>{setShow(!show)}}
        >
            Show/Hide {JSON.stringify( show )}
        </button>

    </div>
  )
}
