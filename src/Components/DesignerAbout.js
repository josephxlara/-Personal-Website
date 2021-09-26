// General
import React, { useState } from 'react';
import { Designer } from '../Constants/Designer';

// Styled Components
import { InformationContainer } from '../StyledComponents/StyledComponents';

// Style
import '../styles.scss';

const DesignerAbout = ({ capabilities, lightMode }) => {
    const [isDesigner, setIsDesigner] = useState(true);

    return (
        <InformationContainer isDesigner={isDesigner} lightMode={lightMode} capabilities={capabilities}>
            {
                Designer.map(section => {
                    return (
                        <>
                            <section.image lightMode={lightMode} width={'100%'} />
                            <p >{section.caption}</p>
                        </>
                    )
                })
            }
        </InformationContainer>
)
}

export default DesignerAbout;