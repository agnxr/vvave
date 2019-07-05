import React from 'react';




const Font = props => (
    <div>
        <p>Font Family: <span style={{fontFamily: `${props.fontFamily}`}}>{props.fontFamily}</span></p>
        <p>Category: {props.category}</p>
    </div>
)

export default Font;