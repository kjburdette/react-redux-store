import React from 'react'

export default function MensClothing() {
    const getMensClothing = async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/');
        const formatResponse = await response.json();
        console.log(formatResponse)
    }

    getMensClothing();
    return (
        <div>
            <h1>Men's Clothing</h1>
        </div>
    )
}
