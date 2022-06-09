import React from 'react'
import { useState } from 'react'
import './CounterApp.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    })

    const {counter1,counter2} = state

    return (
    <>

    <h2>soy un contador {counter1}</h2>
    <h2>soy un contador {counter2}</h2>
        <hr/>

    <button className='btn btn-primary' onClick={(()=>{
        setState(
            {   
                ...state,
                counter1: counter1 + 1
            }
        );
    })}>+</button>


    </>
    )
}
