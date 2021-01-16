import React from 'react';

import Video from '../../components/Video/Video.js';

import classes from './PlayerMedium.module.css';

const playerMedium = (props) => {
    return (
        <div className = { classes.Player }>

            <div className = { classes.Video }>
                <Video url = { 'https://www.youtube.com/embed' + props.url } />   
            </div>

            <div className = { classes.Description }>
                <div className = { classes.Container }>
                    <p className = { classes.Name }>{ props.name }</p>
                    <p className = { classes.Author }>{ props.author }</p>
                    <p className = { classes.Line }></p>
                    <p className = { classes.Captions }>{ props.captions }</p>
                    <p className = { classes.Listen }>Listen on</p>
                    <a href = { 'https://www.youtube.com/watch?v=' + props.url } target="_blank" rel = 'noopener noreferrer'>YouTube</a>
                    { props.bandcampURL !== '' ?  <a href = { props.bandcampURL } target="_blank" rel = 'noopener noreferrer'>BandCamp</a> : null }
                    { props.soundcloudURL !== '' ?  <a href = { props.soundcloudURL } target="_blank" rel = 'noopener noreferrer'>SoundCloud</a> : null }
                </div>
            </div>

        </div>    
    );
}

export default playerMedium;
