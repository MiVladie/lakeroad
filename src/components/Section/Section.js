import React from 'react';
import classes from './Section.module.css';

const section = (props) => {    
    return (
        <div className = { classes.Container }>           
            <h1>{ props.name }</h1>
        </div>
    );
}

export default section;
