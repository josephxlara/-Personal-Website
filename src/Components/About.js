// General
import React from 'react';
import { AboutMeInfo } from '../Constants';

// Component
import InfoSection from './InfoSections';

// Style
import '../styles.scss';

const About = ({ lightMode }) => {
    return (
        <>
            <div className='informationContainer'>
                {
                    AboutMeInfo.map(section => {
                        return <InfoSection section={section} lightMode={lightMode}  />
                    })
                }
            </div>
        </>
    )
}

export default About;