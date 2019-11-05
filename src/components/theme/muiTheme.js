import { createMuiTheme } from '@material-ui/core';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#4c4c4c'
    },
    secondary: {
      main: '#ff5f0a'
    },
    text: {
      main: '#4c4c4c',
      h1: '#2c2c2c',
      h2: '#126fdf'
    },
    error: {
      main: '#f00',
      contrastText: '#fff'
    }
  }
});

export default muiTheme;