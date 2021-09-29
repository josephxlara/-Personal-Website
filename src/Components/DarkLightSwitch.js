// General
import React from 'react';

// Styled Components
import { DarkLightSwitchContainer } from '../StyledComponents/';

// Style
import '../styles.scss'

const DarkLightSwitch = ({ capabilities, lightMode, setLightMode }) => {
    return (
        <DarkLightSwitchContainer capabilities={capabilities}>
            <label className="switch">
                <input type="checkbox" onClick={() => setLightMode(!lightMode)} />
                <span className="slider round"></span>
            </label>
        </DarkLightSwitchContainer>
    )
}

export default DarkLightSwitch; 