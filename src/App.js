// General
import React, { useState } from 'react';

// Components
import About from './Components/About';

const App = () => {
  const [lightMode, setLightMode] = useState(false); 

  return (
    <>
      <About setLightMode={setLightMode} lightMode={lightMode} />
    </>
  )
}

export default App;