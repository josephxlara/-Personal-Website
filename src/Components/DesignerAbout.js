// General
import React from 'react';
import { Designer } from '../Constants/Designer';

// Styled Components
import { AboutContainerDesigner } from '../StyledComponents/';

// Style
import '../styles.scss';

const DesignerAbout = ({ capabilities, lightMode }) => {
    const isDesigner = true;

    return (
        <AboutContainerDesigner isDesigner={isDesigner} lightMode={lightMode} capabilities={capabilities}>
            {
                Designer.map(section => {
                    return (
                        <>
                            {section.websites && <h4>Websites</h4>}
                            {section.websites && section.websites.map(site => {
                                return <a alt="brokenLink" rel="noopener noreferrer" target="_blank" href={site.link}>{site.title}</a>
                            })}
                            {!section.websites && <section.graphic lightMode={lightMode} width='100%' />}
                            {!section.websites && <p >{section.caption}</p>}
                        </>
                    )
                })
            }
        </AboutContainerDesigner>
    )
}

export default DesignerAbout;