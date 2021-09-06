// General
import React from 'react';
import styled from 'styled-components';

// Style
import '../styles.scss'

// SVGs
import { Pencil } from '../FlatIcons';

const Title = ({ lightMode }) => {
    const Container = styled.div`
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: ${lightMode ? '#3d3d3d' : 'white'}
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

export default Title;