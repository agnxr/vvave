import React from 'react';

const Button = ({ refreshFn }) => (
    <button onClick={refreshFn}>Refresh</button> 
  );
  
export default Button;