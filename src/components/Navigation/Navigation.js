import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/images">Images</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/fonts">Fonts</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink} to="/vectors">Vectors</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/videos">Short videos</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;