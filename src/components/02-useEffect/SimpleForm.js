import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './effects.css'
import { Message } from './Message'

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        mail: '',
    });

    const {name,mail} = formState;

    useEffect (() =>{
        // console.log('Hey!')
    },[]);

    useEffect (() =>{
        // console.log('El Form State Cambió!')
    },[formState]);

    useEffect (() =>{
        // console.log('El mail cambió!')
    },[mail]);

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]: target.value
        });
        
    }
    return (
        <>
            <h2>useEffect</h2>
            
            <form className="form-group">
                <input 
                type="text"
                name="name" 
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}/>

                <input 
                type="text"
                name="mail" 
                className="form-control"
                placeholder="jconnor@mail.com"
                autoComplete="off"
                value={mail}
                onChange={handleInputChange}/>
            </form>

            {name === '123' && <Message/>}

            <hr/>

        </>
    )
}
