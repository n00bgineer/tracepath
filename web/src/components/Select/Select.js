// IMPORTING PACKAGES/MODULES
import {
  Box,
  FormHelperText as MuiFormHelperText,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import './select.css'

// CUSTOM COMPONENTS
const CustomMenuItem = styled(MuiMenuItem)(() => ({
  // ROOT STYLES
  '&.MuiMenuItem-root': {
    borderRadius: '9999px',
    margin: '5px',
  },
}))
const CustomSelect = styled(MuiSelect)(({ theme }) => ({
  // ROOT STYLES
  '&.MuiOutlinedInput-root': {
    borderRadius: '9999px',
  },
  '&.MuiOutlinedInput-root:hover': {
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  },

  // SIZE STYLES
  '&MuiInputBase-sizeSmall': {
    padding: '5px',
  },

  // ADORNMENT STYLES
  '&.MuiInputBase-adornedStart .MuiSvgIcon-root': {
    margin: '10px',
  },
  '&.MuiInputBase-adornedEnd .MuiSvgIcon-root': {
    margin: '10px',
  },

  // ICON STYLES
  '&.MuiInputBase-colorPrimary.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.secondary.main,
  },
  '&.MuiInputBase-colorError.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.error.main,
  },
  '&.MuiInputBase-colorInfo.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.info.main,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.success.main,
  },
  '&.Mui-error .MuiSvgIcon-root': {
    color: `${theme.palette.error.main}!important`,
  },

  // FOCUSED STYLES
  '&.MuiInputBase-colorPrimary.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
  },
  '&.MuiInputBase-colorInfo.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.info.main}`,
  },
  '&.MuiInputBase-colorError.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.error.main}`,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.success.main}`,
  },
  '&.MuiError.Mui-focused': {
    boxShadow: `0 0 15px ${theme.palette.error.main}`,
  },

  // SELECT STYLES
  '& .MuiSelect-icon': {
    margin: '0px!important',
  },
}))
const CustomFormHelperText = styled(MuiFormHelperText)(() => ({
  '&.MuiFormHelperText-root': {
    margin: '10px 0px',
    textAlign: 'center',
  },
}))

const Select = ({ margin, errorText, formHelperText, ...props }) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (margin === 'small') marginClass = 'MuiSelect-margin-small'
  else if (margin === 'medium') marginClass = 'MuiSelect-margin-medium'
  else if (margin === 'large') marginClass = 'MuiSelect-margin-large'

  return (
    <Box className={marginClass}>
      <CustomSelect {...props} notched={false} variant="outlined">
        <CustomMenuItem value={10}>Ten</CustomMenuItem>
        <CustomMenuItem value={20}>Twenty</CustomMenuItem>
        <CustomMenuItem value={30}>Thirty</CustomMenuItem>
      </CustomSelect>
      {formHelperText && !errorText && (
        <CustomFormHelperText>
          <Typography variant="body2">{formHelperText}</Typography>
        </CustomFormHelperText>
      )}
      {errorText && (
        <CustomFormHelperText component="div">
          <Typography variant="body2" sx={{ color: 'error.main' }}>
            {errorText}
          </Typography>
        </CustomFormHelperText>
      )}
    </Box>
  )
}
export default Select
