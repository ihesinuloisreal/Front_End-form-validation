// import React, { createContext, useContext, useState } from "react";

// type theme = {
//     children: React.ReactNode
// }

// const ThemeContext = createContext<theme>(themeStyles);
// const ThemeUpdateContext = createContext<theme>({} as theme);

// export const ThemeProvider = ({ children }: theme) => {
//     const [ darkTheme, setDarkTheme ] = useState<any>(true)

//     const toggleTheme = () =>  {
//         setDarkTheme((prevDarkTheme: any) => !prevDarkTheme)
//     }

//     return (
//         <ThemeContext.Provider value={ darkTheme }>
//             <ThemeUpdateContext.Provider value={toggleTheme}>
//                 {children}
//             </ThemeUpdateContext.Provider>
//         </ThemeContext.Provider>
//     )
// }