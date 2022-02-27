import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MySwitch, MyTabs, MyTab } from './components';
import { Container } from '@mui/material';

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
  const [theme, setTheme] = useState(light);

  const handleChange = (event) => {
    setTheme(event.target.checked ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <MyTabs 
        rightComponent={
          <MySwitch 
            onChange={handleChange} 
            sx={{ m: 1 }}  
          />
        } 
        tabs={[
          {
            label: 'Home',
            content: <div>Home</div>
          },
          {
            label: 'About',
            content: <div>About</div>
          },
          {
            label: 'CV',
            content: <div>CV</div>
          }
        ]} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
