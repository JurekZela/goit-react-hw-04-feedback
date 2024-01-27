import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './Global-Styled';

const theme = {
  colors: {
    white: '#ffffff',
    colorText: '#524a4d',
    colorLabel: '#524a4d8b',
    textTable: ' #393e46',
    textHeader: '#262626',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <GlobalStyled />
    </ThemeProvider>  
  </React.StrictMode>
);
