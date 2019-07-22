import React from 'react';
import styled, {css} from 'styled-components';

const StyledBtn = styled.button`
    padding: 20px;
    border: 1px solid ${({theme}) => theme.violet200};
    background-color: #fff;
    margin: 20px;
    margin-top: -10px;
    border-radius: 25px;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;

    ${({active}) => (
        active && css `
        border: 3px solid #030221;
        `
    )}
`;

const Button = ({children, handleClickFn, category, whatToShow}) => (
    <StyledBtn
        onClick={handleClickFn} 
        active={category === whatToShow ? true : false }
    >
        {children}
    </StyledBtn>
)

export default Button;