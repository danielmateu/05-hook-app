import React from 'react'
import { useEffect } from 'react';
// import { useState } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'


export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name: '',
        mail: '',
        password: '',
    });

    const {name,mail,password} = formValues;

    useEffect(() => {
    //   console.log('El mail cambió')
    }, [mail]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }
    

    return (
        <>
            <h2>Form With CustomHook</h2>
            
            <form className="form-group" onSubmit={handleSubmit}>
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

                <input 
                type="password"
                name="password" 
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}/>

                <button 
                type="submit"
                className='btn btn-primary'>Enviar</button>
            </form>


            <hr/>

        </>
    )
}
