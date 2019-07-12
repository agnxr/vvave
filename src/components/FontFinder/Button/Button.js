import React from 'react';
import styles from './Button.module.scss';
import styled, {css} from 'styled-components';

const Btn = styled.button`
    padding: 20px;
    border: 1px solid #03175b;
    background-color: #fff;
    margin: 20px;
    margin-top: 10px;
    border-radius: 25px;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;

    ${({active}) => (
        active && css `
        border: 3px solid #030221;
        `
    )}
`;


const Button = ({children, handleClickFn, category, whatToShow}) => (
       <Btn
            onClick={handleClickFn} 
           active={category === whatToShow ? true : false }
            >
                {children}
        </Btn>

)

export default Button;