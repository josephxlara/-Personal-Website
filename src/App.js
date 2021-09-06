// General
import React, { useState } from 'react';

// Components
import About from './Components/About';
import Switch from './Components/Switch';

// Style
import './styles.scss';

const App = () => {
  const [lightMode, setLightMode] = useState(false); 

  return (
    <>
      <About lightMode={lightMode} />
      <Switch lightMode={lightMode} setLightMode={setLightMode} />
    </>
  )
}

export default App;