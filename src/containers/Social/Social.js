import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import classes from './Social.module.css';
 
const social = () => (
    <div className = { classes.Feed }>
        <TwitterTimelineEmbed
            sourceType = 'profile'
            screenName = 'lakeroadmusic'
            options = {{ width: '800' }}
        />   
    </div>
)

export default social;
