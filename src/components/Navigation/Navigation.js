import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName={styles.activeNavLink} to="/">Home</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/images">Find Images</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/fonts">Find Fonts</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;