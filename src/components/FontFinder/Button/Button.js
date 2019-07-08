import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, handleClickFn, category, whatToShow }) => (
       <button 
            onClick={handleClickFn} 
            className={category === whatToShow ? styles.active : styles.option}>
                {children}
        </button>

)

export default Button;