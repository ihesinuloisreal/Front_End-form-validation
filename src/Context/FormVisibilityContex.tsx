import React, { useContext, useState } from "react";

type theme = {
    children: React.ReactNode
}

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }: theme) => {
    const [ darkTheme, setDarkTheme ] = useState(true)

    // function toggleTheme() {
    //     setDarkTheme(prevDarkTheme => !prevDarkTheme)
    // }

    return (
        <ThemeContext.Provider value={ darkTheme }>
            {children}
        </ThemeContext.Provider>
    )
}