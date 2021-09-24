// General
import React from 'react';

// Styled Components
import { Header, Capability } from '../StyledComponents/StyledComponents';

const CapabilitiesHeader = ({ lightMode, capabilities, setCapabilities }) => {
    return (
        <Header>
            <Capability capabilities={capabilities} color3={lightMode && '#bfbfbf'} color1={lightMode ? '#333333' : 'white'} color={lightMode ? '#ffae59' : '#b191ff'} number={1} onClick={() => setCapabilities(1)}>
                Software Engineer
            </Capability>
            <Capability capabilities={capabilities} color3={lightMode && '#bfbfbf'} color1={lightMode ? '#333333' : 'white'} color={lightMode ? '#ffae59' : '#b191ff'} number={2} onClick={() => setCapabilities(2)}>
                Photographer
            </Capability>
            <Capability capabilities={capabilities} color3={lightMode && '#bfbfbf'} color1={lightMode ? '#333333' : 'white'} color={lightMode ? '#ffae59' : '#b191ff'} number={3} onClick={() => setCapabilities(3)}>
                Designer
            </Capability>
        </Header>
    )
}

export default CapabilitiesHeader;