import React from 'react';

import Video from '../../components/Video/Video.js';
import classes from './Home.module.css';

const main = () => {
    return (
        <div className = { classes.Home }>
            <Video url = 'https://www.youtube.com/embed/LpSIUrXE_lo' />
        </div>
    );
}

export default main;

