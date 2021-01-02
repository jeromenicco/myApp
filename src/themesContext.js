import React from 'react';

export const themes = {
  blue: {
    color: 'blue',
    background: 'black'
  },
  yellow: {
    color: 'yellow',
    background: 'black'
  }
};

const ThemeContext = React.createContext(themes.blue);

export default ThemeContext;