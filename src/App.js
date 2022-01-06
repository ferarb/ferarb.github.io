import React from 'react';
import { ThemeProvider } from './context/ThemeContext'
import { Page } from './components'

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
