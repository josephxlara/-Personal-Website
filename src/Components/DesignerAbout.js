// General
import React, { Fragment } from 'react';
import { Designer } from '../Constants/';

// Styled Components
import { AboutContainer } from '../StyledComponents/';

// Style
import '../styles.scss';

const DesignerAbout = ({ capabilities, lightMode }) => {
    const isDesigner = true;

    return (
        <AboutContainer isDesigner={isDesigner} lightMode={lightMode} capabilities={capabilities}>
            {
                Designer.map(section => {
                    return (
                        <>
                            {section.websites && <h3>Websites</h3>}
                            {section.websites && section.websites.map(site => {
                                return <a alt="brokenLink" rel="noopener noreferrer" target="_blank" href={site.link}>{site.title}</a>
                            })}
                            {!section.websites && <section.graphic lightMode={lightMode} width='100%' />}
                            {!section.websites && <p >{section.caption}</p>}
                        </>
                    )
                })
            }
        </AboutContainer>
    )
}

export default DesignerAbout;