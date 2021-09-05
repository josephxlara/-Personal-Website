// General
import React from 'react';
import styled from 'styled-components';

// Style
import '../styles.scss'

// SVGs
import { Pencil } from '../FlatIcons';

const Header = ({ lightMode }) => {
    const Container = styled.div`
        position: absolute;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0;
    `

    const Name = styled.h1`
        color: ${lightMode ? '#3d3d3d' : 'white'}}
        margin: 0;
        font-size: 3rem;
    `

    const Engineer = styled.h3`
        color: ${lightMode ? '#3d3d3d' : 'white'}}
        margin: 0;
        margin-top: 8px;
        font-size: 1.2rem;
        font-weight: normal
    `

    return (
      <Container>
        <div>
            <Pencil height={80} width={80} />
        </div>
        <Name>
            Joseph Lara
        </Name>
        <Engineer>
            Software Engineer
        </Engineer>
      </Container>
    )
}

export default Header;