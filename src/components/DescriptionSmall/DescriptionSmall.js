import React from 'react';
import classes from './DescriptionSmall.module.css';


const descSmall = (props) => {
    return (
        <div className = { classes.Small }>
            <img src = { require('../../assets/Images/' + props.src) } alt = { props.name }/>
            <div className = { classes.Description }>
                <h2 className = { classes.Name }>{ props.name }</h2>
                <h2 className = { classes.Part }>{ props.part }</h2>
                <p>{ props.text }</p>
            </div>
        </div>
    );
}

export default descSmall;
