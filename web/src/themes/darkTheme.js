// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles'

// DARK THEME
const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1d9449',
    },
    secondary: {
      main: '#b15c5b',
    },
    background: {
      default: 'rgb(39 39 42)',
      paper: 'rgb(24 24 27)',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    h1: {
      fontFamily: 'Raleway',
    },
    h2: {
      fontFamily: 'Raleway',
    },
    h3: {
      fontFamily: 'Raleway',
    },
    h4: {
      fontFamily: 'Raleway',
    },
    h5: {
      fontFamily: 'Raleway',
    },
    h6: {
      fontFamily: 'Raleway',
    },
    fontSize: 16,
  },
})

export default DarkTheme
