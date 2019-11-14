import React from 'react';

import Media from '../Media/Media.js';
import classes from './Footer.module.css';

const footer = () => {
    return (
        <footer className = { classes.Footer }>    
            <Media />
            <small className = { classes.Copyright }>Copyright &copy; { new Date().getFullYear() } lakeroad666. All Rights Reserved</small>
        </footer>
    );
}

export default footer;
