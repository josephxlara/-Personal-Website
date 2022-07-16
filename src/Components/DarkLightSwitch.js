// General
import React from 'react';

// Styled Components
import { 
    DarkLightSwitchContainer, 
    DarkLightSwitchButton, 
    DarkModeMoonComponent,
    LightModeSunComponent,
} from '../StyledComponents/';

// Style
import '../styles.scss';

// Components
import SourceButton from './SourceButton';

const DarkLightSwitch = ({ capabilities, lightMode, setLightMode }) => {
    return (
        <DarkLightSwitchContainer capabilities={capabilities}>
            <SourceButton />
            <DarkLightSwitchButton onClick={() => setLightMode(!lightMode)}>
                {lightMode
                ?
                <DarkModeMoonComponent />
                :
                <LightModeSunComponent />
                }
            </DarkLightSwitchButton>
        </DarkLightSwitchContainer>
    )
}

export default DarkLightSwitch; 