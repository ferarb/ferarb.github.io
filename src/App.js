import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MySwitch } from './components';

const light = createTheme({
  palette: {
    mode: 'light',
  }
});

const dark = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  const [theme, setTheme] = useState(light)

  const handleChange = (event) => {
    setTheme(event.target.checked ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MySwitch 
        onChange={handleChange} 
        sx={{ m: 1 }}  
      />
    </ThemeProvider>
  );
}

export default App;
