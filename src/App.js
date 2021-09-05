// General
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import ParticleAnimation from './Components/Particles';
import About from './Components/About';

const App = () => {
  const [lightMode, setLightMode] = useState(false); 

  return (
    <>
      <ParticleAnimation lightMode={lightMode} setLightMode={setLightMode} />
      <About lightMode={lightMode} />
    </>
  )
}

export default App;