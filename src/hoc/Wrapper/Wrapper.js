import React from 'react';

import classes from './Wrapper.module.css';

const wrapper = (props) => (
    <div className = { classes.Wrapper }>
        { props.children }
    </div>
);

export default wrapper;
