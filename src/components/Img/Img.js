import React from 'react';

const Img = props => (
    <li>
    
        <a target="_blank" href={props.url} >
            <img src={props.src} alt={props.alt}/>
        </a>
        <a href={props.download} download={props.download}>download</a> 
    </li>
)

export default Img;