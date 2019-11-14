import React from 'react';
import classes from './Media.module.css';

const media = () => {
    return (
        <ul className = { classes.Media }>
            <li><a href = 'https://youtube.com/channel/UCKy28nt6M-T0zN-dtTJsfqw' target="_blank" rel = 'noopener noreferrer'><div id = { classes.Youtube } /></a></li>
            <li><a href = 'https://soundcloud.com/lakeroad666' target="_blank" rel = 'noopener noreferrer'><div  id = { classes.Soundcloud }/></a></li>
            <li><a href = 'https://facebook.com/lakeroad666' target="_blank" rel = 'noopener noreferrer'><div id = { classes.Facebook } /></a></li>
            <li><a href = 'https://twitter.com/lakeroadmusic' target="_blank" rel = 'noopener noreferrer'><div id = { classes.Twitter } /></a></li>
            <li><a href = 'https://instagram.com/lakeroad.mp3' target="_blank" rel = 'noopener noreferrer'><div id = { classes.Instagram } /></a></li>
        </ul>
    );
}

export default media;

