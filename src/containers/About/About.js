import React from 'react';

import Section from '../../components/Section/Section.js';
import DescriptionLarge from '../../components/DescriptionLarge/DescriptionLarge.js';
import DescriptionSmall from '../../components/DescriptionSmall/DescriptionSmall.js';

import audience from '../../assets/images/audience.jpg';
import audioMixer from '../../assets/images/audio-mixer.jpg';

import classes from './About.module.css';

const about = () => {
    return (
        <div>
            <Section name = 'Who we are' />

            <DescriptionLarge
                image = { audience }
                name = 'Sed pharetra'
                text = 'Sed pharetra, mauris id dignissim luctus, neque tellus rhoncus mauris, a efficitur urna dolor quis justo. Nam ultrices efficitur est, id feugiat quam facilisis ac. Suspendisse nulla leo, faucibus ut velit vel, auctor posuere odio. In aliquet venenatis maximus. Pellentesque sollicitudin fermentum lorem, non tempus tellus efficitur a. Donec interdum vulputate faucibus.' />
                
            <Section name = 'The band' />

            <section className = { classes.Band }>
                <div className = { classes.Row_1 }>
                    <DescriptionSmall
                        image = { audioMixer }
                        name = 'Neil Ross'
                        part = '//drums'
                        text = 'Curabitur Posuere Magna Eget Nisl Commodo Dignissim. Nullam Eget Arcu Vel Elit Condimentum Vulputate. Suspendisse A Mauris' />

                    <DescriptionSmall
                        image = { audioMixer }
                        name = 'Neil Ross'
                        part = '//drums'
                        text = 'Curabitur Posuere Magna Eget Nisl Commodo Dignissim. Nullam Eget Arcu Vel Elit Condimentum Vulputate. Suspendisse A Mauris' />

                    <DescriptionSmall
                        image = { audioMixer }
                        name = 'Neil Ross'
                        part = '//drums'
                        text = 'Curabitur Posuere Magna Eget Nisl Commodo Dignissim. Nullam Eget Arcu Vel Elit Condimentum Vulputate. Suspendisse A Mauris' />
                </div>
                
                <div className = { classes.Row_2 }>
                    <DescriptionSmall
                        image = { audioMixer }
                        name = 'Neil Ross'
                        part = '//drums'
                        text = 'Curabitur Posuere Magna Eget Nisl Commodo Dignissim. Nullam Eget Arcu Vel Elit Condimentum Vulputate. Suspendisse A Mauris' />

                    <DescriptionSmall
                        image = { audioMixer }
                        name = 'Neil Ross'
                        part = '//drums'
                        text = 'Curabitur Posuere Magna Eget Nisl Commodo Dignissim. Nullam Eget Arcu Vel Elit Condimentum Vulputate. Suspendisse A Mauris' />
                </div>
            </section>
        </div>
    );
}

export default about;
