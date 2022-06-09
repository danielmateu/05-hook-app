import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css'


export const Layout = () => {

    const { counter, increment} = useCounter(1)

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `);
    // console.log(loading);
    const { quote} = !!data && data[0];

    // console.log(author,quote)
    
    const pTag = useRef();
    
    const [boxSize, setBoxSize] = useState({})
    
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])


    return (
        <>
            <hr/>
            <h2>Layout Effect</h2>

            
            
            <blockquote className="blockquote text-end layout">
                <p 
                className="mb-0"
                ref={pTag}>{quote}</p>
            </blockquote>

            <pre className="pre">
                {JSON.stringify(boxSize)}
            </pre>
            
            

            <button className="btn btn-outline-secondary" onClick={increment}>Siguiente Frase</button>
        </>
    )
}