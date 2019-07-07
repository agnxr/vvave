import React from 'react';
import styles from './Info.module.scss';

const Info = ({info}) => (
<span className={styles.info}> {info} </span>
)

export default Info;