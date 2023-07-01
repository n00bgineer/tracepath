// IMPORTING PACKAGES/MODULES
import { Alert as MuiAlert, styled } from '@mui/material'

// CUSTOM COMPONENTS
// CUSTOM ALERT COMPONENT
const CustomAlert = styled(MuiAlert)(({ theme }) => ({
  // DEFAULT STYLES
  '&.MuiAlert-root': {
    borderRadius: '9999px',
    wordBreak: 'break-word',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiAlert-icon': {
    marginRight: '10px',
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
  '& .MuiAlert-action': {
    padding: '0px',
  },

  // MARGIN STYLES
  '&.MuiAlert-margin-small': { marginBottom: '5px' },
  '&.MuiAlert-margin-medium': { marginBottom: '15px' },
  '&.MuiAlert-margin-large': { marginBottom: '20px' },

  // SIZE STYLES
  '&.MuiAlert-small': { paddng: '5px' },
  '&.MuiAlert-medium': { paddng: '10px' },
  '&.MuiAlert-large': { paddng: '20px' },

  // FULLWIDTH CLASS
  '&.MuiAlert-fullwidth': {
    width: '100%',
  },
}))

const Alert = ({ margin, fullWidth, size, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (margin === 'small') marginClass = 'MuiAlert-margin-small'
  else if (margin === 'medium') marginClass = 'MuiAlert-margin-medium'
  else if (margin === 'large') marginClass = 'MuiAlert-margin-large'

  // SETTING SIZE CLASS
  let sizeClass = 'MuiAlert-medium'
  if (size === 'small') sizeClass = 'MuiAlert-small'
  else if (size === 'large') sizeClass = 'MuiAlert-large'

  // SETTING FULLWIDTH CLASS
  let fullWidthClass = ''
  if (fullWidth) fullWidthClass = 'MuiAlert-fullwidth'

  return (
    <CustomAlert
      variant="filled"
      {...props}
      className={`${
        props.className ? props.className : ''
      } ${marginClass} ${fullWidthClass} ${sizeClass}`}
    />
  )
}
export default Alert
