import React from 'react'

export default function ProductCard(props) {
    const {image,title} = props.product
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <button>View More</button>
        </div>
    )
}
