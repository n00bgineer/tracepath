// IMPORTING PACKAGES/MODULES
import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
// CUSTOM BUTTON COMPONENT
const CustomButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: '9999px',
  textTransform: 'none',

  // MARGIN STYLES
  '&.MuiButton-margin-small': { marginBottom: '5px' },
  '&.MuiButton-margin-medium': { marginBottom: '12.5px' },
  '&.MuiButton-margin-large': { marginBottom: '20px' },

  // CONTAINED STYLES
  '&.MuiButton-containedPrimary': {
    background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
  },
  '&.MuiButton-containedSecondary': {
    background: `linear-gradient(to top, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
  },
  '&.MuiButton-containedError': {
    background: `linear-gradient(to top, ${theme.palette.error.dark}, ${theme.palette.error.main}, ${theme.palette.error.main})`,
  },
  '&.MuiButton-containedSuccess': {
    background: `linear-gradient(to top, ${theme.palette.success.dark}, ${theme.palette.success.main}, ${theme.palette.success.main})`,
  },
  '&.MuiButton-containedInfo': {
    background: `linear-gradient(to top, ${theme.palette.info.dark}, ${theme.palette.info.main}, ${theme.palette.info.main})`,
  },

  // CONTAINED HOVER STYLES
  '&.MuiButton-containedPrimary:hover': {
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-containedSecondary:hover': {
    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-containedError:hover': {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-containedSuccess:hover': {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-containedInfo:hover': {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
    filter: 'brightness(120%)',
  },

  // OUTLINED STYLES
  '&.MuiButton-outlined': {
    borderWidth: '2px',
  },

  // OUTLINED HOVER STYLES
  '&.MuiButton-outlinedPrimary:hover': {
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-outlinedSecondary:hover': {
    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-outlinedError:hover': {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-outlinedSuccess:hover': {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
    filter: 'brightness(120%)',
  },
  '&.MuiButton-outlinedInfo:hover': {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
    filter: 'brightness(120%)',
  },

  // SIZE STYLES
  '&.MuiButton-sizeSmall': {
    padding: '10px 20px',
    fontSize: '1.143rem',
  },
  '&.MuiButton-sizeMedium': {
    padding: '15px 25px',
    fontSize: '1.143rem',
  },
  '&.MuiButton-sizeLarge': {
    padding: '20px 30px',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
  },

  // ICON SIZE STYLES
  '&.MuiButton-iconSizeMedium': {
    fontSize: '1rem',
  },
  '& .MuiButton-iconSizeLarge': {
    fontSize: '1.5rem',
  },
}))

const Button = ({ ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (props.margin === 'small') marginClass = 'MuiButton-margin-small'
  else if (props.margin === 'medium') marginClass = 'MuiButton-margin-medium'
  else if (props.margin === 'large') marginClass = 'MuiButton-margin-large'

  return (
    <CustomButton
      {...props}
      className={`${props.className ? props.className : ''} ${marginClass}`}
    />
  )
}
export default Button
