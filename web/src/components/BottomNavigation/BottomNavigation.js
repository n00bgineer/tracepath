// IMPORTING PACKAGES/MODULES

import { useState } from 'react'

import {
  Divider,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  Paper,
  styled,
} from '@mui/material'

import './bottomNavigation.css'
import { Link as RedwoodLink } from '@redwoodjs/router'

// CUSTOM COMPONENTS
const CustomBottomNavigation = styled(MuiBottomNavigation)(() => ({
  '&.MuiBottomNavigation-root': {
    height: '66px',
  },
}))
const BottomNavigationAction = styled(MuiBottomNavigationAction)(
  ({ theme }) => ({
    '&.MuiBottomNavigationAction-root': {
      padding: '10px',
    },
    '&.MuiBottomNavigationAction-root.Mui-selected > .MuiSvgIcon-root': {
      background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
    '&.Mui-selected': {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    '& .MuiBottomNavigationAction-label': {
      fontSize: '15px',
      marginTop: '2px',
    },
  })
)

const BottomNavigation = ({ topActions, ...props }) => {
  // SETTING LOCAL STATES
  const [bottomNavigationValue, setBottomNavigationValue] = useState(0)

  return (
    <>
      <Paper elevation={3} className="bottom-navigation-paper">
        <Divider />
        <CustomBottomNavigation
          {...props}
          showLabels
          value={bottomNavigationValue}
          onChange={(event, newValue) => {
            setBottomNavigationValue(newValue)
          }}
        >
          {topActions.map((topActionItem) => {
            return (
              <BottomNavigationAction
                component={RedwoodLink}
                to={topActionItem.link}
                key={topActionItem.label}
                label={topActionItem.label}
                icon={topActionItem.selectedIcon}
              />
            )
          })}
        </CustomBottomNavigation>
      </Paper>
    </>
  )
}

export default BottomNavigation
