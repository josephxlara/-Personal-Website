// General
import React from 'react';

// SVG
import GradientSVG from '../GradientSVG';

// Style
import '../styles.scss'

const Gradient = ({ lightMode }) => {
    return (
        <div className="gradientDiv">
            <GradientSVG className="gradient" lightMode={lightMode} />
        </div>
    )
}

export default Gradient;