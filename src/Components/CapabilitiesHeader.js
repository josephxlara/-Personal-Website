// General
import React from 'react';
import { useTheme } from '../Design';

// Styled Components
import { 
    CapabilitiesHeaderContainer, 
    Capability 
} from '../StyledComponents/';

const CapabilitiesHeader = ({ lightMode, capabilities, setCapabilities }) => {
    const theme = useTheme();

    return (
        <CapabilitiesHeaderContainer>
            <Capability lightMode={lightMode} capabilities={capabilities} color={lightMode ? theme.capabilitiesHeader.orange : theme.capabilitiesHeader.purple} number={1} onClick={() => setCapabilities(1)}>
                Software Engineer
            </Capability>
            <Capability lightMode={lightMode} capabilities={capabilities} color={lightMode ? theme.capabilitiesHeader.orange : theme.capabilitiesHeader.purple} number={2} onClick={() => setCapabilities(2)}>
                Photographer
            </Capability>
            <Capability lightMode={lightMode} capabilities={capabilities} color={lightMode ? theme.capabilitiesHeader.orange : theme.capabilitiesHeader.purple} number={3} onClick={() => setCapabilities(3)}>
                Designer
            </Capability>
        </CapabilitiesHeaderContainer>
    )
}

export default CapabilitiesHeader;