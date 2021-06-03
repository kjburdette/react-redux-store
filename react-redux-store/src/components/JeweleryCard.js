import React from 'react'

export default function JeweleryCard(props) {
    const {image, title} = props.singleitem
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
        </div>
    )
}
