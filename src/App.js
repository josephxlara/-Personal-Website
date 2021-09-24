// General
import React, { useState } from 'react';

// Styled Components
import { Container } from './StyledComponents/StyledComponents';

// Components
import AboutSoftwareEngineer from './Components/AboutSoftwareEngineer';
import Gradient from './Components/Gradient';
import DarkLightSwitch from './Components/DarkLightSwitch';
import CapabilitiesHeader from './Components/CapabilitiesHeader';
import SRCButton from './Components/SRCButton';
import PhotographerAbout from './Components/PhotographerAbout';

// Style
import './styles.scss';

const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [capabilities, setCapabilities] = useState(1);

  return (
    <Container capabilities={capabilities} lightMode={lightMode}>
      {capabilities === 1 && <Gradient lightMode={lightMode} />}
      <SRCButton />
      <CapabilitiesHeader capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
      {capabilities === 1 && <AboutSoftwareEngineer capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />}
      {capabilities === 2 && <PhotographerAbout lightMode={lightMode} />}
      <DarkLightSwitch lightMode={lightMode} setLightMode={setLightMode} />
    </Container>
  )
}

export default App;