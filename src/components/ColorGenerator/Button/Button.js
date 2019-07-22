import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    padding: 20px;
    border: 1px solid ${({theme}) => theme.violet200};
    background-color: #fff;
    margin: 20px;
    border-radius: 25px;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    font-weight: bold;
    color: ${({theme}) => theme.violet200};
    transition: 0.3s;

    &:hover {
        background-color: ${({theme}) => theme.violet200};
        color: #fff;
    }
`;

const Button = ({ refreshFn }) => (
    <StyledBtn onClick={refreshFn}>Refresh</StyledBtn> 
  );
  
export default Button;