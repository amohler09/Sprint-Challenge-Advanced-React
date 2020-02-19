import React from 'react'
import {useDarkMode} from './hooks/useDarkMode'

export const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className = 'nav-bar'>
            <h1>Women's World Cup Soccer Searches</h1>
            <button onClick={toggleMode}
            className={darkMode ? 'darkBtn' : 'lightBtn'}
            >{darkMode ? 'Light' : 'Dark'} Mode</button>
        </div>
    )
}
