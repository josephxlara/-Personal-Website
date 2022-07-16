// General
import styled from 'styled-components';
import { colors } from '../Design';

// Components
import { DarkModeMoon, LightModeSun } from '../FlatIcons';

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    z-index: -999;
    background-color: ${props => props.lightMode ? colors.white : colors.gray.dark1};
    @media only screen and (min-height: ${props => {
        if (props.capabilities === 1) {
            return '1660px';
        }

        if (props.capabilities === 2) {
            return '5320px';
        }

        if (props.capabilities === 3) {
            return '6240px';
        }
    }}) {
        height: 100vh;
    };
    height: ${props => {
        if (props.capabilities === 1) {
            return '1660px';
        }

        if (props.capabilities === 2) {
            return '5320px';
        }

        if (props.capabilities === 3) {
            return '6240px';
        }
    }};
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
        margin-bottom: -8px;
    };
    h3 {    
        margin: 0;
        font-weight: ${props => {
            if (props.isSoftwareEngineer) {
                return '400';
            }
            else {
                return '500'
            }
        }};
        font-size: ${props => {
            if (props.isDesigner) {
                return '1.8rem';
            }

            else {
                return '14px';
            }
        }};
        display: flex;
        align-self: ${props => {
            if (props.isDesigner) {
                return 'flex-start';
            }
        }};
        color: ${props => {
            if (props.lightMode) {
                return colors.gray.dark1
            }
            else {
                return colors.white
            }
        }};
    };
    p {
        font-weight: 500;
        align-self: flex-start;
        font-size: 16px;
        margin-bottom: ${props => {
            if (props.isPhotographer) {
                return '64px'
            }
            if (props.isDesigner) {
                return '128px';
            }
            else {
                return '0';
            }
        }};
        margin-top: ${props => {
            if (props.isDesigner) {
                return '20px';
            }
        }};
        color: ${props => {
            if (props.lightMode) {
                return colors.gray.dark1
            }

            else {
                return colors.white
            }
        }};
    };
    a {
        margin: 0;
        margin-bottom: ${props => {
            if (props.isDesigner) {
                return '8px';
            }

            else {
                return '0';
            }
        }};
        font-size: 14px;
        display: flex;
        font-weight: 400;
        color: ${props => {
            if (props.lightMode) {
                return colors.gray.dark1
            }

            else {
                return colors.white
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
`

// SourceButton.js
export const SourceButtonContainer = styled.div`
    position: absolute;
    padding: 0 6px 0 6px;
    left: 0;
    border-radius: 8px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${colors.blue.blue1};
    :hover {
        background-color: ${colors.blue.blue2};
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
    width: 100px;
    height: 34px;
    top: 0;
    right: 0;
    margin-right: 12px;
    margin-top: 12px;
    z-index: 998;
`

export const DarkLightSwitchButton = styled.button`
    height: 100%;
    border: none;
    background: none;
    z-index: 999;
    right: 0;
    position: absolute;
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
    margin: 0 8px 0 0;
    @media only screen and (min-width: 725px) {
        font-size: 1.8rem;
        margin: 0 12px 0 0;
    };
    cursor: pointer;
    color: ${props => {
        if (props.capabilities === 1) {
            if (props.number === props.capabilities) {
                return colors.white

            }

            else {
                return props.color
            }
        }

        else {
            if (props.lightMode) {
                if (props.capabilities === props.number) {
                    return colors.gray.dark1
                }

                else {
                    return colors.gray.dark2
                }
            }

            else {
                if (props.capabilities === props.number) {
                    return colors.white
                }

                else {
                    return colors.gray.light1
                }
            }
        }
    }}
`

// SoftwareEngineerAbout.js
export const SectionContainer = styled.div`
    width: 100%;
    margin-bottom: 32px;
    flex-direction: row;
    display: flex;
    justify-content: center;
`

export const SectionHeaderContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`

export const SectionHeader = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${props => props.lightMode ? colors.gray.dark1 : colors.white}
`

export const SectionBodyItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    flex-wrap: wrap;
    width: 120px;
    a {
        font-weight: 400;
        color: ${props => props.lightMode ? colors.gray.dark1 : colors.white}
    }
    h3 {
        font-weight: 400;
        color: ${props => props.lightMode ? colors.gray.dark1 : colors.white}
    }
`

export const ProjectStack = styled.div`
    flex-direction: row;
    display: flex;
    margin-top: 4px;
    margin-bottom: 6px;
`

// Gradient.js
export const GradientContainer = styled.div`
    height: 400px;
    display: flex;
    width: 100%;
    position: absolute;
`

// Components
export const DarkModeMoonComponent = styled(DarkModeMoon)`
    height: 100%;
    width: 32px;
    fill: #000;
    &:hover {
        fill: #ededed;
        cursor: pointer;
    }
`

export const LightModeSunComponent = styled(LightModeSun)`
    height: 100%;
    width: 32px;
    fill: #fff;
    &:hover {
        fill: #ededed;
        cursor: pointer;
    }
`