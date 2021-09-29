// General
import React from 'react';
import styled from 'styled-components';

// Styled Components
import { SwitchDiv } from '../StyledComponents/';

// Style
import '../styles.scss'

const DarkLightSwitch = ({ capabilities, lightMode, setLightMode }) => {
    return (
        <SwitchDiv capabilities={capabilities}>
           <label className="switch">
                <input type="checkbox" onClick={() => setLightMode(!lightMode)} />
                <span className="slider round"></span>
            </label>
        </SwitchDiv>
    )
}

export default DarkLightSwitch; 