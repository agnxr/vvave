import React from 'react';

const Img = props => (
    <li>
    
        <a target="_blank" href={props.url} >
            <img src={props.src} alt={props.alt}/>
        </a>
        <a href={props.download} download={props.download}>download</a>
        <a href="https://www.antennahouse.com/XSLsample/pdf/sample-link_1.pdf" download>Download Form</a> 
    </li>
)

export default Img;