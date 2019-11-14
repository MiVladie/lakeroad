import React from 'react';

import PlayerLarge from '../../components/PlayerLarge/PlayerLarge.js';
import PlayerMedium from '../../components/PlayerMedium/PlayerMedium.js';
import Section from '../../components/Section/Section.js';

import Aux from '../../hoc/Auxiliary/Auxiliary.js';

const music = () => {
    return (
        <div>
            <Section name = 'Listen now' />

            <PlayerLarge 
                url = '/LpSIUrXE_lo'
                name = 'la lune pleure'
                author = 'lakeroad'
                captions = { <Aux>recorded at <br/>Flouquet Studio </Aux> } />
                
            <PlayerMedium 
                url = '/3Ol6nbzcsOA'
                name = 'leave a message (after the storm)'
                author = 'lakeroad'
                captions = { <Aux>recorded at <br/>Flouquet Studio </Aux> }
                bandcampURL = ''
                soundcloudURL = 'https://soundcloud.com/lakeroad666/lakeroad-leave-a-message-after-the-storm' />

            <PlayerMedium 
                url = '/sL-i3Ic0_pE'
                name = 'Nightcall (cover)'
                author = 'lakeroad'
                captions = { <Aux>recorded at <br/>Flouquet Studio </Aux> }
                bandcampURL = 'https://lakeroad666.bandcamp.com/track/nightcall-kavinsky-cover'
                soundcloudURL = 'https://soundcloud.com/lakeroad666/nightcall-reprise' />

            <PlayerLarge 
                url = '/x4PHL9LTQv4'
                name = "drivin' in the city"
                author = 'lakeroad'
                captions = { <Aux>recorded at <br/>Flouquet Studio </Aux> } />
        </div>
    );
}

export default music;
