// General
import React from 'react';
import { SoftwareEngineerInfo } from '../Constants';

// Component
import InfoSection from './InfoSections';

// Style
import '../styles.scss';

const About = ({ lightMode }) => {
    return (
        <>
            <div className='informationContainer'>
                {
                    SoftwareEngineerInfo.map(section => {
                        return <InfoSection section={section} lightMode={lightMode}  />
                    })
                }
            </div>
        </>
    )
}

export default About;