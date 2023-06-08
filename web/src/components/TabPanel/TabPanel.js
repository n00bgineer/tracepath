// IMPORTING PACKAGES/MODULES
import { Box } from '@mui/material'
import './tabPanel.css'

const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <div
      {...props}
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      className={
        props.className
          ? props.className + ' tabpanel-container'
          : 'tabpanel-container'
      }
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}
export default TabPanel
