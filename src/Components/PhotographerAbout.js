// General
import React from 'react';
import { Photographer } from '../Constants/Photographer';

// Styled Components
import { AboutContainer } from '../StyledComponents/';

// Style
import '../styles.scss';

const PhotographerAbout = ({ capabilities, lightMode }) => {
    return (
        <AboutContainer lightMode={lightMode} capabilities={capabilities}>
            {
                Photographer.map(section => {
                    return (
                        <div >
                            <img alt="Joseph Lara" src={section.image} />
                            <p >{section.caption}</p> 
                        </div>
                    )
                })
            }
        </AboutContainer>
    )
}

export default PhotographerAbout;