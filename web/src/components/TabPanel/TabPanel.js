// IMPORTING PACKAGES/MODULES
import { Box, styled } from '@mui/material'

// CUSTOM COMPONENTS
const CustomBox = styled(Box)(() => ({
  '&.tabpanel-container': {
    margin: '5px 0px',
  },
}))
const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <CustomBox
      {...props}
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      className={`${props.className ? props.className : ''} tabpanel-container`}
    >
      {value === index && <Box>{children}</Box>}
    </CustomBox>
  )
}
export default TabPanel
