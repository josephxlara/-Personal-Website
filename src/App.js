// General
import React, { useState } from 'react';

// Styled Components
import { Container } from './StyledComponents/StyledComponents';

// Components
import About from './Components/About';
import Gradient from './Components/Gradient';
import DarkLightSwitch from './Components/DarkLightSwitch';
import CapabilitiesHeader from './Components/CapabilitiesHeader';
import SRCButton from './Components/SRCButton';

// Style
import './styles.scss';

const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [capabilities, setCapabilities] = useState(1);

  return (
    <Container lightMode={lightMode}>
      {capabilities === 1 && <Gradient lightMode={lightMode} />}
      <SRCButton />
      <CapabilitiesHeader capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
      <About capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
      <DarkLightSwitch lightMode={lightMode} setLightMode={setLightMode} />
    </Container>
  )
}

export default App;