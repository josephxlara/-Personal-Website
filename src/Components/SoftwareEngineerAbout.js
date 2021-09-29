// General
import React from 'react';
import { SoftwareEngineer } from '../Constants/SoftwareEngineer';

// Styled Components
import { AboutContainer, SectionHeader } from '../StyledComponents/';

// Style
import '../styles.scss';

const AboutSoftwareEngineer = ({ lightMode, capabilities }) => {
    return (
        <AboutContainer capabilities={capabilities}>
            {
                SoftwareEngineer.map(section => {
                    return (
                        <div className='sectionDiv'>
                            <section.sectionIcon className='sectionIcon' alt={60} height={60} />
                            <div className='sectionHeader'>
                                <SectionHeader lightMode={lightMode}>
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
                })
            }
        </AboutContainer>
    )
}

export default AboutSoftwareEngineer;