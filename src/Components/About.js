// General
import React from 'react';
import styled from 'styled-components';
import { AboutMeInfo } from '../Constants';

// SVG
import { Pencil } from '../FlatIcons';
import Gradient from '../Gradient';

// Component
import AboutSection from './AboutSection';

// Style
import '../styles.scss';

const About = ({ lightMode }) => {
    const Container = styled.div`
        width: 100%;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        z-index: -1;
        background-color: ${lightMode ? 'white' : '#333333'};
        height: 1400px;
        @media only screen and (min-height: 1400px) {
            height: 100vh;
        }
    `

    const Header = styled.div`
        justify-content: center;
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        margin-left: 12px;
        margin-top: 12px;
    `

    const Engineer = styled.p`
        color: ${lightMode ? '#333333' : 'white'}};
        font-weight: 600;
        margin: 0;
        font-size: 1.2rem;
        @media only screen and (min-width: 450px) {
            font-size: 2rem;
        }
    `

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
      z-index: 999;
      :hover {
          background-color: #208de3;
      }
      & > a, a:link, a:visited {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        height: 34px;
        width: 40px;
        margin: 0;
        z-index: 999;
      }
    `

    return (
        <Container>
            <div className="gradientDiv">
                <Gradient className="gradient" lightMode={lightMode} />
            </div>
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
            <Header>
                <Engineer>
                Software Engineer
                </Engineer>
            </Header>
            <div className='informationContainer'>
                {
                    AboutMeInfo.map(section => {
                        return <AboutSection section={section} lightMode={lightMode}  />
                    })
                }
            </div>
        </Container>
    )
}

export default About;