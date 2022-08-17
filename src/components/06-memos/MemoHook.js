import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'

export const MemoHook = () => {

    const {counter,increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    

    const memoProcesoPesado = useMemo(() => procesoPesado(counter),[counter]);

  return (
    <div>
        <hr/>
        <h2>Memo Hook</h2>
        <h3>Counter: <p>{counter}</p></h3>

        {/* <p>{procesoPEsado(counter)}</p> */}
        <p>{memoProcesoPesado}</p>

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
