// IMPORTING PACKAGES/MODULES
import { Box, Drawer as MuiDrawer, styled } from '@mui/material'

import { useAuth } from 'src/auth'

import SideNavigationElement from '../SideNavigationElement/SideNavigationElement'

// CUSTOM COMPONENTS
// SIDE NAVIGATION DRAWER ELEMENT
const SideNavigationDrawer = styled(MuiDrawer)(() => ({
  '& .MuiPaper-root': {
    padding: '10px',
  },
  '& .side-navigation-logo': {
    marginBottom: '10px',
  },
  '& .side-navigation-logo-small': {
    width: '30px',
    height: '30px',
  },
  '& .side-navigation-logo-medium': {
    width: '50px',
    height: '50px',
  },
  '& .side-navigation-logo-large': {
    width: '60px',
    height: '60px',
  },
  '& .side-navigation-top-actions': {
    flexGrow: '1',
  },
}))

const SideNavigation = ({
  logoUrl,
  topActions,
  bottomActions,
  size,
  ...props
}) => {
  // GETTING AUTH CONTEXT
  const { isAuthenticated } = useAuth()

  // SETTING LOGO SIZE CLASS
  let logoSizeClass = 'side-navigation-logo-medium'
  if (size === 'small') logoSizeClass = 'side-navigation-logo-small'
  else if (size === 'large') logoSizeClass = 'side-navigation-logo-large'

  return (
    <SideNavigationDrawer
      variant="permanent"
      anchor="left"
      sx={{ background: 'background.default' }}
      className="side-navigation"
      {...props}
    >
      <img
        src={logoUrl}
        alt="app logo"
        className={['side-navigation-logo', logoSizeClass].join(' ')}
        loading="lazy"
      />
      {topActions && (
        <Box className="side-navigation-top-actions">
          {topActions.map((topActionItem) => {
            return (
              <SideNavigationElement
                type="link"
                key={topActionItem.label}
                link={topActionItem.link}
                isSelected={topActionItem.isSelected}
                selectedIcon={topActionItem.selectedIcon}
                unselectedIcon={topActionItem.unselectedIcon}
                size={size}
              />
            )
          })}
        </Box>
      )}
      {bottomActions && isAuthenticated && (
        <Box className="side-navigation-bottom-actions">
          {bottomActions.map((bottomActionItem) => {
            return (
              <SideNavigationElement
                type="button"
                key={bottomActionItem.label}
                selectedIcon={bottomActionItem.selectedIcon}
                unselectedIcon={bottomActionItem.unselectedIcon}
                isSelected={bottomActionItem.isSelected}
                onClick={bottomActionItem.onClick}
                size={size}
              />
            )
          })}
        </Box>
      )}
    </SideNavigationDrawer>
  )
}

export default SideNavigation
