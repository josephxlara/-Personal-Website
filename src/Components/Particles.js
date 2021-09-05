// General
import React from 'react';
import Particles from 'react-tsparticles';

// Style
import '../styles.scss';
import styled from 'styled-components';

// Component Imports
import Title from './Title';
import Switch from './Switch';

const ParticleAnimation = ({ lightMode, setLightMode }) => {
    const SourceCode = styled.div`
      position: absolute;
      padding: 0 6px 0 6px;
      top: 0;
      right: 0;
      margin-right: 84px;
      margin-top: 12px;
      border-radius: 8px;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      display: flex;
      background-color: #2196F3;
      & > a, a:link, a:visited {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        height: 34px;
        width: 40px;
        z-index: 999;
      }
    `

    return (
      <div style={{ position: 'relative' }}>
        <Switch lightMode={lightMode} setLightMode={setLightMode} />
        <Title lightMode={lightMode} />
        <SourceCode>
          <a 
            href='https://github.com/josephxlara/-Personal-Website' 
            alt='blankLink' 
            rel="noopener noreferrer" 
            target="_blank" 
          >
            src
          </a>
        </SourceCode>
        <Particles
          className="wrapper"
          params={{
            "background": {
              color: {
                value: lightMode ? 'white' : '#3d3d3d'
              }
            },
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 1000
                }
              },
              "color": {
                "value": lightMode ? "#45aaf2" : "#fa8231"
              },
              "shape": {
                "type": "circle",
              },
              "opacity": {
                "value": {
                  "min": .2,
                  "max": .6
                },
                "animation": {
                  "enable": true,
                  "speed": 1,
                  "sync": false,
                  "destroy": "none",
                  "startValue": "random",
                }
              },
              "size": {
                "value": 3,
                "random": false,
              },
              "line_linked": {
                "enable": false,
              },
              "move": {
                "enable": true,
                "speed": 1,
                "out_mode": "bounce",
                "bounce": true,
              }
            },
          }}
        />
      </div>
    )
}

export default ParticleAnimation;