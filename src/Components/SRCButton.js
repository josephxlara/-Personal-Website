// General
import React from 'react';

// Styled Components
import { SourceButton } from '../StyledComponents/StyledComponents';

const SRCButton = () => {
    return (
        <SourceButton>
            <a 
                href='https://github.com/josephxlara/-Personal-Website' 
                alt='blankLink' 
                rel="noopener noreferrer" 
                target="_blank" 
            >
                src
            </a>
        </SourceButton>
    )
}

export default SRCButton;