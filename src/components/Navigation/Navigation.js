import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName={styles.activeNavLink} to="/">Colour Palettes</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/images">Find Images</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/fonts">Find Fonts</NavLink></li>
            <li><NavLink exact activeClassName={styles.activeNavLink}  to="/templates">still no idea? find an already designed template (PSDFreebies)
</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;