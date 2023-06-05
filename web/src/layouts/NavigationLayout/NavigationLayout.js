// IMPORTING PACKAGES/MODULES
import {
  AccountCircle,
  AccountCircleOutlined,
  Assessment,
  AssessmentOutlined,
  DarkMode,
  Explore,
  ExploreOutlined,
  LightMode,
  Logout,
  LogoutOutlined,
} from '@mui/icons-material'
import { Box, useMediaQuery } from '@mui/material'
import { useRecoilState } from 'recoil'

import { routes } from '@redwoodjs/router'

import './navigationLayout.css'
import BottomNavigation from 'src/components/BottomNavigation/BottomNavigation'
import PositionedScreen from 'src/components/PositionedScreen/PositionedScreen'
import SideNavigation from 'src/components/SideNavigation/SideNavigation'
import { darkThemeAtom } from 'src/contexts/atoms'

const NavigationLayout = ({ children }) => {
  // SETTING LOCAL VARIABLES
  // GETTING CURRENT PATHNAME
  const { pathname } = window.location

  // GETTING ATOMIC STATES
  const [isDarkTheme, setDarkTheme] = useRecoilState(darkThemeAtom)

  // SETTING MEDIA QUERY
  const isMobileViewport = useMediaQuery('(min-width:900px)')

  // SETTING TOP ACTIONS
  const topActions = [
    {
      label: 'Generate',
      selectedIcon: <Assessment />,
      unselectedIcon: <AssessmentOutlined />,
      link: routes.generate(),
      isSelected: pathname === routes.generate(),
    },
    {
      label: 'Explore',
      selectedIcon: <Explore />,
      unselectedIcon: <ExploreOutlined />,
      link: routes.explore(),
      isSelected: pathname === routes.explore(),
    },
    {
      label: 'Account',
      selectedIcon: <AccountCircle />,
      unselectedIcon: <AccountCircleOutlined />,
      link: routes.user({ id: 'bba8c3b0-fc14-43b0-a2fb-4ab8a8314d46' }),
      isSelected:
        pathname ===
        routes.user({ id: 'bba8c3b0-fc14-43b0-a2fb-4ab8a8314d46' }),
    },
  ]

  // SETTING BOTTOM ACTIONS
  const bottomActions = [
    {
      label: 'Theme',
      selectedIcon: <DarkMode />,
      unselectedIcon: <LightMode />,
      isSelected: isDarkTheme,
      onClick: toggleDarkTheme,
    },
    {
      label: 'Logout',
      selectedIcon: <Logout />,
      unselectedIcon: <LogoutOutlined />,
      isSelected: true,
      onClick: () => {},
    },
  ]

  // METHODS
  /**
   * @name toggleDarkTheme
   * @description METHOD TO TOGGLE DARK THEME
   * @returns {undefined} undefined
   */
  function toggleDarkTheme() {
    setDarkTheme(!isDarkTheme)
  }

  return (
    <Box className="navigation-layout">
      {!isMobileViewport ? (
        <BottomNavigation topActions={topActions} />
      ) : (
        <SideNavigation
          logoUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
          topActions={topActions}
          bottomActions={bottomActions}
          size="large"
        />
      )}
      <PositionedScreen>{children}</PositionedScreen>
    </Box>
  )
}

export default NavigationLayout
