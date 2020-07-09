import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import YugiDex from './YugiDex';

const App = (props) => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <YugiDex />
    </ThemeProvider>
  );
}

export default App;
