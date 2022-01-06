import React, { useState } from "react";
import { createContext } from "react";
import { LIGHT, DARK } from "../consts"

const ThemeContext = createContext({
  theme: LIGHT,
  handleTheme: () => {}
});

const initialTheme = LIGHT;

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (newTheme) => {
    switch (newTheme) {
      case 'light': 
        setTheme(LIGHT);
        break;
      case 'dark': 
        setTheme(DARK);
        break;
      default: 
        throw new Error(`Incorrect theme options`);
    }
  }

  const data = {
    theme: theme,
    handleTheme: handleTheme
  }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;