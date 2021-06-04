import React from 'react'
import { useSelector } from "react-redux";


export default function SingleProduct() {
    const selectedProduct = useSelector(state => state.singleProduct)
    return (
        <div>
            <h1>{selectedProduct.title}</h1>
            <img src={selectedProduct.image} alt="" height="200" width="200"/>
            <p>${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
        </div>
    )
}
