import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Message = () => {
    
    const [coords, setCoords] = useState({x:0,y:0});
    const {x,y} = coords;

    useEffect(() => {

        const mouseMove = (e) =>{
            const coords = { x:e.x, y:e.y }
            setCoords(coords)
        }

        window.addEventListener('mousemove',mouseMove)
        // console.log('Componente Montado!')

        return () => {
            window.removeEventListener('mousemove',mouseMove)
        }
    }, [])


    return (
        <div>
            <h2>WHAT¿?</h2>
            <p>
                x:{x} y: {y}
            </p>
        </div>
    )
}
