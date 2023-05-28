// IMPORTING PACKAGES/MODULES
import { Alert as MuiAlert } from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
const CustomAlert = styled(MuiAlert)(({ theme }) => ({
  // DEFAULT STYLES
  '&.MuiAlert-root': {
    borderRadius: '9999px',
    padding: '10px',
  },
  '& .MuiAlert-icon': {
    padding: '10px',
    margin: '0px',
  },

  // FILLED STYLES
  '&.MuiAlert-filledSuccess': {
    background: `linear-gradient(to top, ${theme.palette.success.dark}, ${theme.palette.success.main}, ${theme.palette.success.main})`,
  },
  '&.MuiAlert-filledError': {
    background: `linear-gradient(to top, ${theme.palette.error.dark}, ${theme.palette.error.main}, ${theme.palette.error.main})`,
  },
  '&.MuiAlert-filledWarning': {
    background: `linear-gradient(to top, ${theme.palette.warning.dark}, ${theme.palette.warning.main}, ${theme.palette.warning.main})`,
  },
  '&.MuiAlert-filledInfo': {
    background: `linear-gradient(to top, ${theme.palette.info.dark}, ${theme.palette.info.main}, ${theme.palette.info.main})`,
  },

  // MARGIN STYLES
  '&.MuiAlert-margin-small': { marginBottom: '5px' },
  '&.MuiAlert-margin-medium': { marginBottom: '10px' },
  '&.MuiAlert-margin-large': { marginBottom: '20px' },

  // FULLWIDTH CLASS
  '&.MuiAlert-fullwidth': {
    width: '100%',
  },
}))

const Alert = ({ margin, fullWidth, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (margin === 'small') marginClass = 'MuiAlert-margin-small'
  else if (margin === 'medium') marginClass = 'MuiAlert-margin-medium'
  else if (margin === 'large') marginClass = 'MuiAlert-margin-large'

  // SETTING FULLWIDTH CLASS
  let fullWidthClass = ''
  if (fullWidth) fullWidthClass = 'MuiAlert-fullwidth'

  return (
    <CustomAlert
      {...props}
      variant="filled"
      className={
        (props.className ? props.className : '') +
        ' ' +
        marginClass +
        ' ' +
        fullWidthClass
      }
    />
  )
}
export default Alert
