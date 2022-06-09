import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'


export const MultipleCustomHooks = () => {

    const { counter, increment} = useCounter(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `);
    // console.log(loading);
    const {author, quote} = !!data && data[0];

    // console.log(author,quote)


    return (
        <>
            <h3>Breaking Bad Quotes</h3>

            {
            loading ? (
            <div className="alert alert-info text-center">
                Loading...
            </div>)
            : (
            <blockquote className="blockquote text-end">
                <p className="mb-0">{quote}</p>
                <figcaption className="blockquote-footer">{author}</figcaption>
            </blockquote>
            )
            }

            <button className="btn btn-outline-secondary" onClick={increment}>Siguiente Frase</button>
        </>
    )
}
