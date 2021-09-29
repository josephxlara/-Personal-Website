// General
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    z-index: -999;
    background-color: ${props => props.lightMode ? 'white' : '#333333'};
    @media only screen and (min-height: ${props => {
        if (props.capabilities === 1) {
            return '1560px';
        }

        if (props.capabilities === 2) {
            return '5300px';
        }

        if (props.capabilities === 3) {
            return '6200px';
        }
    }}) {
        height: 100vh;
    };
    height: ${props => {
        if (props.capabilities === 1) {
            return '1560px';
        }

        if (props.capabilities === 2) {
            return '5300px';
        }

        else {
            return '6200px';
        }
    }};
`

export const SectionHeader = styled.h1`
    margin: 0;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${props => props.lightMode ? '#333333' : '#fff'}
`

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    margin-top: ${props => {
        if (props.capabilities === 1) {
            return '440px'
        }
        
        return '120px'
    }};
    max-width: 600px;
    img {
        display: flex;
        width: 100%;
        margin-bottom: -12px;
    };
    p {
        font-weight: 600;
        font-size: 1rem;
        align-self: flex-start;
        margin-bottom: ${props => {
            if (props.isDesigner) {
                return '128px'
            }

            else {
                return '64px'
            }
        }};
        color: ${props => props.lightMode ? '#333333' : 'white'};
    };
    a {
        margin-bottom: ${props => {
            if (props.isDesigner) {
                return '12px';
            }

            else {
                return '0';
            }
        }};
        font-weight: 500;
        color: ${props => {
            if (props.lightMode) {
                return '#333333'
            }

            else {
                return '#fff'
            }
        }};
        align-self: ${props => {
            if (props.isDesigner) {
                return 'flex-start';
            }
        }};
        text-decoration: none;
        :hover {
            text-decoration: underline;
        }
    };
    a:last-of-type {
        margin-bottom: ${props => {
            if (props.isDesigner) {
                return '64px'
            }

            else {
                return '0'
            }
        }};
    };
    h3 {
        color: ${props => props.lightMode ? '#333333' : 'white'}
    };
    h4 {
        margin: 0;
        margin-bottom: 12px;
        padding: 0;
        font-size: 1.8rem;
        color: ${props => {
            if (props.lightMode) {
                return '#333333'
            }

            else {
                return '#fff'
            }
        }};
        align-self: flex-start;
        font-weight: 600;
`

// SourceButton.js
export const SourceButtonContainer = styled.div`
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

// DarkLightSwitch.js
export const DarkLightSwitchContainer = styled.div`
    position: fixed;
    width: 60px;
    height: 34px;
    top: 0;
    right: 0;
    margin-right: 12px;
    margin-top: 12px;
    z-index: 999;
`

// CapabilitiesHeader.js
export const CapabilitiesHeaderContainer = styled.div`
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

