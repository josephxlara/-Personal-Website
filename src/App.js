// General
import React, { useState } from 'react';

// Styled Components
import { 
  Container,
} from './StyledComponents/';

// Components
import SoftwareEngineerAbout from './Components/SoftwareEngineerAbout';
import Gradient from './Components/Gradient';
import DarkLightSwitch from './Components/DarkLightSwitch';
import CapabilitiesHeader from './Components/CapabilitiesHeader';
import SourceButton from './Components/SourceButton';
import PhotographerAbout from './Components/PhotographerAbout';
import DesignerAbout from './Components/DesignerAbout';

// Style
import './styles.scss';

const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [capabilities, setCapabilities] = useState(1);

  return (
    <Container capabilities={capabilities} lightMode={lightMode}>
      <SourceButton />
      <CapabilitiesHeader capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
      <DarkLightSwitch capabilities={capabilities} lightMode={lightMode} setLightMode={setLightMode} />
      {capabilities === 1 && <Gradient lightMode={lightMode} />}
      {capabilities === 1 && <SoftwareEngineerAbout capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />}
      {capabilities === 2 && <PhotographerAbout capabilities={capabilities} lightMode={lightMode} />}
      {capabilities === 3 && <DesignerAbout capabilities={capabilities} lightMode={lightMode} />}
    </Container>
  )
}

export default App;