import React from 'react';

const Img = props => (

    
    <video width="400" controls>
  <source src={props.url} type="video/mp4" />
  </video>


)

export default Img;