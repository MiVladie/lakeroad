import React from 'react';

import classes from './Layout.module.css';

import './index.css';

const layout = (props) => (
    <div className = { classes.Layout }>
        <div className = { classes.Background }></div>
        { props.children }
    </div>
);

export default layout;
