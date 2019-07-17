import React from 'react';
import styled, {css} from 'styled-components';

const StyledBtn = styled.button`
    padding: 20px;
    border: 1px solid #03175b;
    background-color: #fff;
    margin: 20px;
    border-radius: 25px;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    font-weight: bold;
    color: #03175b;
    transition: 0.3s;

    &:hover {
        background-color: #03175b;
        color: #fff;
    }
`;

const Button = ({ refreshFn }) => (
    <StyledBtn onClick={refreshFn}>Refresh</StyledBtn> 
  );
  
export default Button;