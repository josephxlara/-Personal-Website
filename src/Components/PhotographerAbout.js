// General
import React from 'react';
import { Photographer } from '../Constants/Photographer';

// Styled Components
import { InformationContainer } from '../StyledComponents/StyledComponents';

// Style
import '../styles.scss';

const PhotographerAbout = ({ capabilities, lightMode }) => {
    return (
        <InformationContainer lightMode={lightMode} capabilities={capabilities}>
            {
                Photographer.map(section => {
                    return (
                        <>
                            <img alt="Joseph Lara" src={section.image} />
                            <p >{section.caption}</p>
                        </>
                    )
                })
            }
        </InformationContainer>
)
}

export default PhotographerAbout;