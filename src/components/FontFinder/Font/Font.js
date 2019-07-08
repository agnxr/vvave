import React from 'react';




const Font = ({fontFamily, category }) => (
    <div>
        <p>Font Family: <span style={{fontFamily: `${fontFamily}`}}>{fontFamily}</span></p>
        <p>Category: {category}</p>
        <p>standard code to embed font:  
            <span>
            &lt;link href={`https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap`} rel="stylesheet" /&gt;
            </span>
        </p>
        <p>@import: 
            <span>
            @import url('{`https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap`}');
            </span>
        </p>
        <p>
            CSS rule:
            <span>
                font-family: '{fontFamily}', {category};
            </span>
        </p>
    </div>
)

export default Font;