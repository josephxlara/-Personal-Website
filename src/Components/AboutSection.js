// General
import React from 'react';
import styled from 'styled-components';

const AboutSection = ({ section, lightMode }) => {
    const SectionHeader = styled.h1`
        color: ${lightMode ? '#3d3d3d' : 'white'};
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
                                    style={{ color: lightMode ? '#3d3d3d' : 'white' }} 
                                    alt='blankLink' 
                                    rel="noopener noreferrer" 
                                    target="_blank" 
                                    href={sectionBodyItem.link}
                                >
                                    {sectionBodyItem.item}
                                </a> 
                                : 
                                <h3 
                                    style={{ color: lightMode ? '#3d3d3d' : 'white' }} 
                                >
                                    {sectionBodyItem.item}
                                </h3>
                                }
                                <div className='projectStack'>
                                    {
                                        sectionBodyItem.stack &&
                                        sectionBodyItem.stack.map(Tech => {
                                            return <Tech lightMode={lightMode} style={{ marginRight: '8px', display: 'flex' }} height={16} width={16} />
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

export default AboutSection;