import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import { defaultTheme } from '@styles/theme';
import { Router } from '@routes/Router';
import TourContextProvider from './context/TourContext';


export function App() {
  return (
    <TourContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </TourContextProvider>
  );
}
