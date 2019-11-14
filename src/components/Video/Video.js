import React from 'react';
import classes from './Video.module.css';

const video = (props) => {    
    return (
        <div className = { classes.Container }>
            <iframe 
                title = 'Video'
                className = { classes.Video } 
                src={ props.url } 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen >            
            </iframe>
        </div>
    );
}

export default video;
