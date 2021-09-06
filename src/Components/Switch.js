// General
import React from 'react';

// Style
import '../styles.scss'

const Switch = ({ lightMode, setLightMode }) => {
    return (
        <div className='switchDiv'>
            <label className="switch">
                <input type="checkbox" onClick={() => setLightMode(!lightMode)}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Switch;