import React from 'react';
import styles from './Button.module.scss';
import styled, {css} from 'styled-components';

const Btn = styled.button`
    padding: 20px;

    ${({active}) => (
        active && css `
        border: 3px solid red;
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