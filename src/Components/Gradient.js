// General
import React from 'react';

// SVG
import GradientSVG from '../GradientSVG';

// Styled Components
import { 
    GradientContainer
} from '../StyledComponents/';

// Style
import '../styles.scss'

const Gradient = ({ lightMode }) => {
    return (
        <GradientContainer>
            <GradientSVG style={{ width: '100%' }} lightMode={lightMode} />
        </GradientContainer>
    )
}

export default Gradient;