import React, { createContext, useState } from 'react';


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  
  const toggleTheme = () => setIsDark(prev => !prev);

  
  const theme = {
    isDark,
    colors: {
      background: isDark ? '#000' : '#fff',
      text: isDark ? '#fff' : '#000',
      card: isDark ? '#121212' : '#f0f0f0',
      primary: '#00BFFF',
      danger: '#FF3B30',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
