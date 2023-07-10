// IMPORTING PACKAGES/MODULES
import { Tab as MuiTab } from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
const CustomTab = styled(MuiTab)(({ theme }) => ({
  // COMMON STYLES
  '&.MuiTab-root': {
    borderRadius: '9999px',
    textTransform: 'none',
    minHeight: 'unset',
  },

  // TEXT STYLES
  '& .MuiTab-textColorPrimary': { color: '#FFF' },
  '& .MuiTab-textColorSecondary': { color: '#FFF' },

  // SIZE STYLES
  '&.MuiTab-sizeSmall': {
    padding: '0x 5px!important',
    fontSize: '0.875rem!important',
  },
  '&.MuiTab-sizeMedium': {
    padding: '0x 10px!important',
    fontSize: '0.8rem!important',
  },
  '&.MuiTab-sizeLarge': {
    padding: '0px 25px',
    fontSize: '1rem',
    minHeight: '61px',
  },

  // ICON SIZE STYLES
  '&.MuiTab-iconSizeSmall': {
    fontSize: '1rem',
  },
  '&.MuiTab-iconSizeMedium': {
    fontSize: '1rem',
  },
  '& .MuiTab-iconSizeLarge': {
    fontSize: '1.5rem',
  },

  // COLOR STYLES
  '&.MuiTab-primary.Mui-selected': {
    background: `#FFF`,
    color: '#000',
  },
  '&.MuiTab-secondary.Mui-selected': {
    background: `linear-gradient(to top, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main}, ${theme.palette.secondary.main})`,
    color: '#FFF',
  },
  '&.MuiTab-primary.Mui-selected:hover': {
    filter: 'brightness(120%)',
  },
  '&.MuiTab-secondary.Mui-selected:hover': {
    filter: 'brightness(120%)',
  },
}))

const Tab = ({ size, color, ...props }) => {
  // SETTING SIZE CLASS
  let sizeClass = 'MuiTab-sizeMedium MuiTab-iconSizeMedium'
  if (size === 'small') sizeClass = 'MuiTab-sizeSmall MuiTab-iconSizeSmall'
  else if (size === 'large') sizeClass = 'MuiTab-sizeLarge MuiTab-iconSizeLarge'

  // SETTING COLOR CLASS
  let colorClass = 'MuiTab-primary'
  if (color === 'secondary') colorClass = 'MuiTab-secondary'

  return (
    <CustomTab
      {...props}
      className={`${
        props.className ? props.className : ''
      } ${sizeClass} ${colorClass}`}
    />
  )
}
export default Tab
