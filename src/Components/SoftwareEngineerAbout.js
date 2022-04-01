// General
import React from 'react';
import { SoftwareEngineer } from '../Constants/';

// Styled Components
import { 
    AboutContainer, 
    SectionHeader,
    SectionContainer,
    SectionHeaderContainer,
    SectionBodyItem,
    ProjectStack
} from '../StyledComponents/';

// Style
import '../styles.scss';

const SoftwareEngineerAbout = ({ lightMode, capabilities }) => {
    const isSoftwareEngineer = true;

    return (
        <AboutContainer isSoftwareEngineer={isSoftwareEngineer} capabilities={capabilities}>
            {
                SoftwareEngineer.map(section => {
                    return (
                        <SectionContainer>
                            <section.sectionIcon style={{ marginRight: '20px' }} height={60} />
                            <SectionHeaderContainer>
                                <SectionHeader lightMode={lightMode}>
                                    {section.sectionHeader}
                                </SectionHeader>
                                {
                                    section.sectionBody.map(sectionBodyItem => {
                                        return (
                                            <SectionBodyItem lightMode={lightMode}>
                                                {/* Company experience */}
                                                {sectionBodyItem.isCompany && 
                                                <>
                                                    <a 
                                                        alt='blankLink' 
                                                        rel="noopener noreferrer" 
                                                        target="_blank" 
                                                        href={sectionBodyItem.website}
                                                    >
                                                        <sectionBodyItem.logo 
                                                            lightMode={lightMode} 
                                                            style={{ 
                                                                display: 'flex',
                                                                marginTop: '-28px',
                                                                marginBottom: '-40px'
                                                            }} 
                                                            height={88}
                                                            width={88}
                                                        />
                                                    </a>
                                                    <p style={{ 
                                                        fontSize: '12px',

                                                    }}>
                                                        {sectionBodyItem.role}
                                                    </p>
                                                </>
                                                }

                                                {/* Company experience */}
                                                {sectionBodyItem.icon && !sectionBodyItem.isCompany && 
                                                    <sectionBodyItem.icon 
                                                        lightMode={lightMode} 
                                                        style={{ 
                                                            marginRight: '8px', 
                                                            display: 'flex' 
                                                        }} 
                                                        height={16} 
                                                        width={16} 
                                                    />
                                                }

                                                {/* Section with links like 'Projects' & 'Contact' */}
                                                {sectionBodyItem.link 
                                                ? 
                                                <a 
                                                    alt='blankLink' 
                                                    rel="noopener noreferrer" 
                                                    target="_blank" 
                                                    href={sectionBodyItem.link}
                                                >
                                                    {sectionBodyItem.item}
                                                </a> 
                                                : 
                                                <h3 >
                                                    {sectionBodyItem.item}
                                                </h3>
                                                }
                                                {
                                                    sectionBodyItem.stack &&
                                                    <ProjectStack>
                                                        {
                                                            sectionBodyItem.stack.map(Tech => {
                                                                return (
                                                                    <Tech lightMode={lightMode} style={{ marginRight: '6px', display: 'flex' }} width={16} height={16} />
                                                                )
                                                            })
                                                        }
                                                    </ProjectStack>
                                                }
                                            </SectionBodyItem>
                                        )
                                    })
                                }
                            </SectionHeaderContainer>
                        </SectionContainer>
                    )
                })
            }
        </AboutContainer>
    )
}

export default SoftwareEngineerAbout;