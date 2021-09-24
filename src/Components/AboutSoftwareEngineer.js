// General
import React from 'react';
import { SoftwareEngineerInfo } from '../Constants/SoftwareEngineerConstant';

// Styled Components
import { InformationContainer } from '../StyledComponents/StyledComponents';

// Component
import SoftwareEngineerComponent from './SoftwareEngineerComponent';

// Style
import '../styles.scss';

const AboutSoftwareEngineer = ({ lightMode, capabilities }) => {
    return (
        <InformationContainer capabilities={capabilities} >
            {
                SoftwareEngineerInfo.map(section => {
                    return <SoftwareEngineerComponent section={section} lightMode={lightMode}  />
                })
            }
        </InformationContainer>
    )
}

export default AboutSoftwareEngineer;