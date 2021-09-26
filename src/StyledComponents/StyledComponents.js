// General
import styled from 'styled-components';

export const ContainerForSoftwareEngineer = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    z-index: -999;
    background-color: ${props => props.lightMode ? 'white' : '#333333'};
    height: 1560px;
    @media only screen and (min-height: 1560px) {
        height: 100vh;
    }
`

export const ContainerForPhotographer = styled.div`
    width: 10040
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    z-index: -999;
    background-color: ${props => props.lightMode ? 'white' : '#333333'};
    height: 5300px;
    @media only screen and (min-height: 5300px) {
        height: 100vh;
    }
`

export const ContainerForDesigner = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    z-index: -999;
    background-color: ${props => props.lightMode ? 'white' : '#333333'};
    height: 5400px;
    @media only screen and (min-height: 5400px) {
        height: 100vh;
    }
`
    
export const Header = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    margin-left: 12px;
    margin-top: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media only screen and (min-width: 550px) {
        flex-direction: row;
    }
    z-index: 999;
`

export const Capability = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    @media only screen and (min-width: 725px) {
        font-size: 1.8rem;
    }
    margin: 0;
    margin-right: 12px;
    cursor: pointer;
    color: ${props => {
        if (props.capabilities === 1) {
            if (props.number === props.capabilities) {
                return '#fff'
            }

            else {
                return props.color
            }
        }

        else {
            if (props.lightMode) {
                if (props.capabilities === props.number) {
                    return '#333333'
                }

                else {
                    return '#dedede'
                }
            }

            else {
                if (props.capabilities === props.number) {
                    return '#fff'
                }

                else {
                    return '#4a4a4a'
                }
            }
        }
    }}
`

export const SourceButton = styled.div`
    position: absolute;
    padding: 0 6px 0 6px;
    top: 0;
    right: 0;
    margin-right: 84px;
    margin-top: 12px;
    border-radius: 8px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #2196F3;
    z-index: 999;
    :hover {
        background-color: #208de3;
    }
    & > a, a:link, a:visited {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    height: 34px;
    width: 40px;
    margin: 0;
    z-index: 999;
    }
`

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${props => {
        if (props.capabilities === 1) {
            return '400px'
        }
    }}
    background-color: red;
    margin-top: ${props => {
        if (props.capabilities === 1) {
            return '440px'
        }

        else {
            return '120px'
        }
    }};
    max-width: 600px;
    img {
        display: flex;
        width: 320px;
        margin-bottom: ${props => {
            if (props.isDesigner) {
                return '4px;'
            }

            else {
                return '-12px';
            }
        }}
    }
    p {
        font-weight: 600;
        font-size: 1.2rem;
        align-self: flex-start;
        margin-bottom: 64px;
        color: ${props => props.lightMode ? '#333333' : 'white'}
    }
`