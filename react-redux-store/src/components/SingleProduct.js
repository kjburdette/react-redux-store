import React from 'react'
import { useSelector } from "react-redux";


export default function SingleProduct() {
    const selectedProduct = useSelector(state => state.singleProduct)
    return (
        <div>
            <h1>Single Product</h1>
            <img src={selectedProduct.image} alt="" height="200" width="200"/>
            <h3>{selectedProduct.title}</h3>
            <p>${selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
        </div>
    )
}
