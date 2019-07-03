import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/images">Images</Link></li>
        <li><Link to="/fonts">Fonts</Link></li>
    </ul>
);

export default Navigation;