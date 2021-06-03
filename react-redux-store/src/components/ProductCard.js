import React from 'react'
import { addProductToCart } from '../actions/cartActions';
import { useDispatch } from "react-redux";
import { setItem } from '../actions/single-item-action';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const {image,title} = props.product
    const dispatch = useDispatch()
    return (
        <div>
            <img src={image} height="200" width="200" alt=""/>
            <h2>{title}</h2>
            <Link to="/products/:id">
            <button onClick={() => setItem(dispatch, props.product)}>View More Details</button>
            </Link>
            <button onClick={() => addProductToCart(dispatch, props.product)}>Add to Cart</button>
        </div>
    )
}
                                                     