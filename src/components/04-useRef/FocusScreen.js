import React from 'react'
import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();
    // console.log(inputRef)

    const handleClick = () =>{
        // document.querySelector('.focus-screen').select();
        inputRef.current.select();
        console.log(inputRef)
    }

  return (
    <>
    <hr/>
    <h2>FocusScreen</h2>
    <input
    ref = {inputRef}
    type="text" 
    className='form-control focus-screen' 
    placeholder="Su nombre"/>
    <button className='btn btn-outline-warning'
            onClick={handleClick}>Focus</button>
    </>
    
  )
}
