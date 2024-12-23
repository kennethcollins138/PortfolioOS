"use client"
import React, { createContext, useContext } from 'react';

interface Theme {
  backgroundColor: string;
  fontFamily: string;
  fontSize: string;
  textColor: string;
}

const defaultTheme: Theme = {
  backgroundColor: '#000000',
  fontFamily: "'Courier New', Courier, monospace",
  fontSize: '16px',
  textColor: '#00ff00',
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Partial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const mergedTheme = { ...defaultTheme, ...theme };
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>;
};
