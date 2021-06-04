import React from 'react'
import { addProductToCart } from '../actions/cartActions';
import { useDispatch } from "react-redux";
import { setItem } from '../actions/single-item-action';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function ProductCard(props) {
    const {image,title} = props.product
    const dispatch = useDispatch()
    return (
        <div>
            <Card style={{ width: '15rem', margin: '10px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link to="/products/:id">
                    <Button variant="primary" style={{ margin: '10px' }} onClick={() => setItem(dispatch, props.product)}>View More Details</Button>
                    </Link>
                    <Button variant="primary" style={{ margin: '10px' }} onClick={() => addProductToCart(dispatch, props.product)}>Add to Cart</Button>
                </Card.Body>
                </Card>
        </div>
    )
}
                                                     