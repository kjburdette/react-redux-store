import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../actions/products-actions';
import ProductCard from './ProductCard';

export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productsReducer)
    console.log(products)

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const formatResponse = await response.json();
        setProducts(dispatch, formatResponse);
    }

    return (
        <div>
            <h1>The Goods</h1>
            {products.map((product) =>{
                return(
                    <ProductCard product={product} key={product.id}/>
                )
            })}
        </div>
    )
}
