// General
import React from 'react';
import { PhotographerInfo } from '../Constants/PhotographerConstant';

// Styled Components
import { InformationContainer } from '../StyledComponents/StyledComponents';

// Style
import '../styles.scss';

const PhotographerAbout = ({ capabilities }) => {
    return (
        <InformationContainer capabilities={capabilities}>
            {
                PhotographerInfo.map(section => {
                    return (
                        <img src={section.image} />
                    )
                })
            }
        </InformationContainer>
)
}

export default PhotographerAbout;