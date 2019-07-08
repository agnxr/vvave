import React from 'react';
import styles from './Info.module.scss';

const Info = ({info}) => (
<p>Available fonts: <span className={styles.info}> {info} </span> </p>
)

export default Info;