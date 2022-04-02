// General
import React from 'react';
import { SoftwareEngineer } from '../Constants/';
import { colors } from '../Design';

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
                SoftwareEngineer.map((section, idx) => {
                    return (
                        <SectionContainer key={idx}>
                            <section.sectionIcon style={{ marginRight: '20px' }} height={60} width={60} />
                            <SectionHeaderContainer>
                                <SectionHeader lightMode={lightMode}>
                                    {section.sectionHeader}
                                </SectionHeader>
                                {
                                    section.sectionBody.map((sectionBodyItem, idx) => {
                                        return (
                                            <SectionBodyItem key={idx} lightMode={lightMode}>
                                                {/* 'Experience' section */}
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
                                                            height={88}
                                                            width={88}
                                                            style={{ height: '28px', marginBottom: '-12px' }}
                                                        />
                                                    </a>
                                                    <p style={{ 
                                                        fontWeight: 400,
                                                        fontSize: '12px',
                                                        color: lightMode ? colors.gray.dark1 : colors.white,
                                                    }}>
                                                        {sectionBodyItem.role}
                                                    </p>
                                                </>
                                                }

                                                {/* 'Toolbox' section */}
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

                                                {/* 'Projects' & 'Contact' sections */}
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
                                                            sectionBodyItem.stack.map((Tech, idx) => {
                                                                return (
                                                                    <Tech key={idx} lightMode={lightMode} style={{ marginRight: '6px', display: 'flex' }} width={16} height={16} />
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