// General
import { createContext, useContext } from 'react';

export const colors = {
    white: "#fff",
    gray: {
        dark1: "#333333",
        dark2: "#dedede",
        light1: "#4a4a4a",
    },
    capabilitiesHeader: {
        purple: "#b191ff",
        orange: "#ffae59"
    },
    blue: {
        blue1: "#2196F3",
        blue2: "#208de3",
    },
    svgGradient: {
        darkMode: {
            color1: "#9e7ae9",
            color2: "#a888ef",
            color3: "#b396f4",
            color4: "#bda4fa",
            color5: "#c8b2ff",
        },
        lightMode: {
            color1: "#ff9834",
            color2: "#ffa54b",
            color3: "#ffb162",
            color4: "#ffbd78",
            color5: "#ffc88e",
        }
    }
}

const ThemeContext = createContext(colors);

export function useTheme() {
    const theme = useContext(ThemeContext);

    return theme;
}