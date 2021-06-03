import React, { useEffect } from 'react'
import { setJewelery } from '../actions/jewelery-actions';
import { useSelector, useDispatch } from "react-redux";
import JeweleryCard from './JeweleryCard';


export default function Jewelery() {
    const dispatch = useDispatch()
    const jewelery = useSelector(state => state.jeweleryReducer)

    useEffect(() => {
        getJewelery()
    }, [])

    console.log(jewelery)

    const getJewelery = async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        const formatResponse = await response.json();
        setJewelery(dispatch, formatResponse)
    }

    return (
        <div>
            <h1>Jewelery</h1>
            {jewelery.map((singleitem) =>{
                return(
                   <JeweleryCard singleitem={singleitem} key={singleitem.id}/>
                )
            })}
        </div>
    )
}
