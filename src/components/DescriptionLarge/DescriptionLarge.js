import React from 'react';
import classes from './DescriptionLarge.module.css';

const descLarge = (props) => {
    return (
        <div className = { classes.Large }>
            <div className = { classes.Image }>
                <img src = { props.image } alt = { props.name } />
                <div className = { classes.Description }>                    
                    <h2>{ props.name }</h2>
                    <p>{ props.text }</p>
                </div>
            </div>
        </div>
    );
}

export default descLarge;
