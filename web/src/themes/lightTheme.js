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
    background: {
      default: '#ececec',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    h1: {
      fontFamily: 'Josefin Sans',
    },
    h2: {
      fontFamily: 'Josefin Sans',
    },
    h3: {
      fontFamily: 'Josefin Sans',
    },
    h4: {
      fontFamily: 'Josefin Sans',
    },
    h5: {
      fontFamily: 'Josefin Sans',
    },
    h6: {
      fontFamily: 'Josefin Sans',
    },
    fontSize: 16,
  },
})

export default LightTheme
