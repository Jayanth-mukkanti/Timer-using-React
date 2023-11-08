import React from "react"

export const DestinationList = () => {
    return (
        <div>
            <h1 className='text-danger fs-1'> Top 5 Travel Destinations </h1>
            <ol id="destinationNames" className="fs-5">
                <a className="text-dark text-decoration-none" href="./index.html#1"><li> Vrindavan </li></a>
                <a className="text-dark text-decoration-none" href="./index.html#2"><li> Kerela </li></a>
                <a className="text-dark text-decoration-none" href="./index.html#3"><li> Goa </li></a>
                <a className="text-dark text-decoration-none" href="#4"><li> Pondicherry </li></a>
                <a className="text-dark text-decoration-none" href="./index.html#5"><li> Leh-Ladakh </li></a>
            </ol>
        </div>
    )
}