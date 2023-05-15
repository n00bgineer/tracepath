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

export default DarkTheme
