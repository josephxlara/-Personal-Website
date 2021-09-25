// General
import React from 'react';
import { SoftwareEngineer } from '../Constants/SoftwareEngineer';
import styled from 'styled-components';

// Styled Components
import { InformationContainer } from '../StyledComponents/StyledComponents';

// Style
import '../styles.scss';

const SoftwareEngineerAbout = ({ section, lightMode }) => {
    const SectionHeader = styled.h1`
        color: ${lightMode ? '#333333' : 'white'};
        margin: 0;
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 8px;
    `
    
    return (
        <div className='sectionDiv'>
            <section.sectionIcon className='sectionIcon' alt={60} height={60} />
            <div className='sectionHeader'>
                <SectionHeader>
                    {section.sectionHeader}
                </SectionHeader>
                {
                    section.sectionBody.map(sectionBodyItem => {
                        return (
                            <div className='sectionBodyItem'>
                                {sectionBodyItem.icon && <sectionBodyItem.icon lightMode={lightMode} className='itemImg' height={16} width={16} />}
                                {sectionBodyItem.link 
                                ? 
                                <a 
                                    style={{ color: lightMode ? '#333333' : 'white' }} 
                                    alt='blankLink' 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    href={sectionBodyItem.link}
                                >
                                    {sectionBodyItem.item}
                                </a> 
                                : 
                                <h3 
                                    style={{ color: lightMode ? '#333333' : 'white' }} 
                                >
                                    {sectionBodyItem.item}
                                </h3>
                                }
                                <div className='projectStack'>
                                    {
                                        sectionBodyItem.stack &&
                                        sectionBodyItem.stack.map(Tech => {
                                            return <Tech lightMode={lightMode} style={{ marginRight: '6px', display: 'flex' }} width={16} height={16} />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const AboutSoftwareEngineer = ({ lightMode, capabilities }) => {
    return (
        <InformationContainer capabilities={capabilities}>
            {
                SoftwareEngineer.map(section => {
                    return <SoftwareEngineerAbout section={section} lightMode={lightMode}  />
                })
            }
        </InformationContainer>
    )
}

export default AboutSoftwareEngineer;