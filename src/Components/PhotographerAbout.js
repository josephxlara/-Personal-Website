// General
import React from 'react';
import { Photographer } from '../Constants/';

// Styled Components
import { AboutContainer } from '../StyledComponents/';

// Style
import '../styles.scss';

const PhotographerAbout = ({ capabilities, lightMode }) => {
    const isPhotographer = true;

    return (
        <AboutContainer isPhotographer={isPhotographer} lightMode={lightMode} capabilities={capabilities}>
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