// General
import React from 'react';

// Styled Components
import { SourceButtonContainer } from '../StyledComponents';

const SourceButton = () => {
    return (
        <SourceButtonContainer>
            <a 
                href='https://github.com/josephxlara/-Personal-Website' 
                alt='blankLink' 
                rel='noopener noreferrer' 
                target='_blank' 
            >
                src
            </a>
        </SourceButtonContainer>
    )
}

export default SourceButton;