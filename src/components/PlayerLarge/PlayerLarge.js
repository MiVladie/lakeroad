import React from 'react';

import Video from '../../components/Video/Video.js';

import classes from './PlayerLarge.module.css';

const playerLarge = (props) => {
    return (
        <div className = { classes.Player }>
            <Video url = { 'https://www.youtube.com/embed' + props.url } />
            <div className = { classes.Description }>
                <p className = { classes.Name }>{ props.author } - { props.name }</p>
                <p className = { classes.Captions }>{ props.captions }</p>
            </div>
        </div>
    );
}

export default playerLarge;
