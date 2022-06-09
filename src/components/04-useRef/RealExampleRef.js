import React from 'react'
import { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <hr />
            <h2>Real Example useRef</h2>
            {
                show && <MultipleCustomHooks />
            }

            <button className="btn btn-primary" onClick={()=>{
                setShow(!show);
            }}>Show/Hide</button>
            

        </>

    )
}
