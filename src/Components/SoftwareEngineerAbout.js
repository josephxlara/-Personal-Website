// General
import React from 'react';
import { SoftwareEngineer } from '../Constants/SoftwareEngineer';

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
    return (
        <AboutContainer capabilities={capabilities}>
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
                                                {sectionBodyItem.icon && <sectionBodyItem.icon lightMode={lightMode} style={{ marginRight: '8px', display: 'flex' }} height={16} width={16} />}
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
                                                <ProjectStack>
                                                    {
                                                        sectionBodyItem.stack &&
                                                        sectionBodyItem.stack.map(Tech => {
                                                            return <Tech lightMode={lightMode} style={{ marginRight: '6px', display: 'flex' }} width={16} height={16} />
                                                        })
                                                    }
                                                </ProjectStack>
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