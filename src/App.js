// General
import React, { useState } from 'react';

// Styled Components
import { 
  ContainerForSoftwareEngineer, 
  ContainerForPhotographer,
  ContainerForDesigner
} from './StyledComponents/StyledComponents';

// Components
import SoftwareEngineerAbout from './Components/SoftwareEngineerAbout';
import Gradient from './Components/Gradient';
import DarkLightSwitch from './Components/DarkLightSwitch';
import CapabilitiesHeader from './Components/CapabilitiesHeader';
import SRCButton from './Components/SRCButton';
import PhotographerAbout from './Components/PhotographerAbout';
import DesignerAbout from './Components/DesignerAbout';

// Style
import './styles.scss';

const App = () => {
  const [lightMode, setLightMode] = useState(false);
  const [capabilities, setCapabilities] = useState(1);

  if (capabilities === 1) {
    return (
      <ContainerForSoftwareEngineer capabilities={capabilities} lightMode={lightMode}>
        {capabilities === 1 && <Gradient lightMode={lightMode} />}
        <SRCButton />
        <CapabilitiesHeader capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
        {capabilities === 1 && <SoftwareEngineerAbout capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />}
        {capabilities === 2 && <PhotographerAbout capabilities={capabilities} lightMode={lightMode} />}
        {capabilities === 3 && <DesignerAbout capabilities={capabilities} lightMode={lightMode} />}
        <DarkLightSwitch lightMode={lightMode} setLightMode={setLightMode} />
      </ContainerForSoftwareEngineer>
    )
  }

  if (capabilities === 2) {
    return (
      <ContainerForPhotographer capabilities={capabilities} lightMode={lightMode}>
        {capabilities === 1 && <Gradient lightMode={lightMode} />}
        <SRCButton />
        <CapabilitiesHeader capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
        {capabilities === 1 && <SoftwareEngineerAbout capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />}
        {capabilities === 2 && <PhotographerAbout capabilities={capabilities} lightMode={lightMode} />}
        {capabilities === 3 && <DesignerAbout capabilities={capabilities} lightMode={lightMode} />}
        <DarkLightSwitch lightMode={lightMode} setLightMode={setLightMode} />
      </ContainerForPhotographer>
    )
  }

  if (capabilities === 3) {
    return (
      <ContainerForDesigner capabilities={capabilities} lightMode={lightMode}>
        {capabilities === 1 && <Gradient lightMode={lightMode} />}
        <SRCButton />
        <CapabilitiesHeader capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />
        {capabilities === 1 && <SoftwareEngineerAbout capabilities={capabilities} setCapabilities={setCapabilities} lightMode={lightMode} />}
        {capabilities === 2 && <PhotographerAbout capabilities={capabilities} lightMode={lightMode} />}
        {capabilities === 3 && <DesignerAbout capabilities={capabilities} lightMode={lightMode} />}
        <DarkLightSwitch lightMode={lightMode} setLightMode={setLightMode} />
      </ContainerForDesigner>
    )
  }
}

export default App;