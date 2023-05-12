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
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
    h1: {
      fontFamily: 'Roboto Slab',
    },
    h2: {
      fontFamily: 'Roboto Slab',
    },
    h3: {
      fontFamily: 'Roboto Slab',
    },
    h4: {
      fontFamily: 'Roboto Slab',
    },
    h5: {
      fontFamily: 'Roboto Slab',
    },
    h6: {
      fontFamily: 'Roboto Slab',
    },
    fontSize: 16,
  },
})

export default LightTheme
