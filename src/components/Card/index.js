import React, { useState } from 'react';

function Card(props) {
    const { 
    title,
    copy,
    github,
    site,
    img
    } = props

    const url = '../../assets/img/';
    return (
        <div className="card_container">
            <div>
                <img src={url + img}/>
            </div>
            <h3>
                {title}
            </h3>
            <p>
                {copy}
            </p>
        </div>
    )
}

export default Card;