// IMPORTING PACKAGES/MODULES
import {
  Box,
  FormHelperText as MuiFormHelperText,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  Typography,
  Chip,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
const CustomBox = styled(Box)(() => ({
  /* MARGIN STYLES */
  '&.MuiSelect-margin-small': {
    marginBottom: '5px',
  },
  '&.MuiSelect-margin-medium': {
    marginBottom: '12.5px',
  },
  '&.MuiSelect-margin-large': {
    marginBottom: '20px',
  },
}))
const CustomMenuItem = styled(MuiMenuItem)(() => ({
  // ROOT STYLES
  '&.MuiMenuItem-root': {
    borderRadius: '9999px',
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiMenuItem-label': {
    flexGrow: '1',
  },
}))
const CustomSelect = styled(MuiSelect)(({ theme }) => ({
  // ROOT STYLES
  '&.MuiOutlinedInput-root': {
    borderRadius: '9999px',
  },
  '&.MuiOutlinedInput-root:hover': {
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
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
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
  },
  '&.MuiInputBase-colorInfo.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.info.main}`,
  },
  '&.MuiInputBase-colorError.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
  },
  '&.MuiError.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
  },

  // SELECT STYLES
  '& .MuiSelect-icon': {
    margin: '0px 0px 0px 10px!important',
  },
  '& .MuiOutlinedInput-input': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiOutlinedInput-input > .MuiMenuItem-label': {
    flexGrow: '1',
  },
}))
const CustomFormHelperText = styled(MuiFormHelperText)(() => ({
  '&.MuiFormHelperText-root': {
    margin: '10px 0px',
    textAlign: 'center',
  },
}))

const Select = ({
  margin,
  errorText,
  formHelperText,
  selectItems,
  ...props
}) => {
  // SETTING LOCAL VARIABLES
  // SETTING MARGIN CLASS
  let marginClass = ''
  if (margin === 'small') marginClass = 'MuiSelect-margin-small'
  else if (margin === 'medium') marginClass = 'MuiSelect-margin-medium'
  else if (margin === 'large') marginClass = 'MuiSelect-margin-large'

  return (
    <CustomBox className={marginClass}>
      <CustomSelect
        {...props}
        notched={false}
        variant="outlined"
        MenuProps={{
          sx: {
            '& .MuiMenu-list': {
              padding: '0px',
            },
            '& .MuiMenu-paper': {
              borderRadius: '25px',
              marginTop: '10px',
              padding: '0px',
            },
          },
        }}
      >
        <CustomMenuItem key="default" value="default">
          {props.placeholder}
        </CustomMenuItem>
        {selectItems &&
          selectItems.map((selectItem) => {
            return (
              <CustomMenuItem
                key={selectItem.value}
                value={selectItem.value}
                disabled={selectItem.disabled}
              >
                <Box className="MuiMenuItem-label">{selectItem.label}</Box>
                <Chip
                  size="small"
                  label={selectItem.chipLabel}
                  sx={{
                    color: `${selectItem.chipColor}.main`,
                    bgcolor: `${selectItem.chipColor}.100`,
                  }}
                />
              </CustomMenuItem>
            )
          })}
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
    </CustomBox>
  )
}
export default Select
