// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles'

// LIGHT THEME
const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1d9449',
    },
    secondary: {
      main: '#b15c5b',
    },
    grey: {
      main: '#EDE7E3',
    },
    background: {
      default: '#fff',
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

export default LightTheme
