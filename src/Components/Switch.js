// General
import React from 'react';

// Style
import '../styles.scss'

const Switch = ({ lightMode, setLightMode }) => {
    return (
        <div className='switchDiv'>
           <label class="switch">
                <input type="checkbox" onClick={() => setLightMode(!lightMode)} />
                <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Switch; 