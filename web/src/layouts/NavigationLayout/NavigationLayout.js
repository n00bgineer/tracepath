// IMPORTING PACKAGES/MODULES
import {
  AccountCircle,
  AccountCircleOutlined,
  DarkMode,
  Explore,
  ExploreOutlined,
  LightMode,
  LocationOn,
  LocationOnOutlined,
  Logout,
  LogoutOutlined,
} from '@mui/icons-material'
import { useRecoilState } from 'recoil'

import { routes } from '@redwoodjs/router'

import PositionedScreen from 'src/components/PositionedScreen/PositionedScreen'
import SideNavigation from 'src/components/SideNavigation/SideNavigation'
import { darkThemeAtom } from 'src/contexts/atoms'

const NavigationLayout = ({ children }) => {
  // SETTING LOCAL VARIABLES
  // GETTING CURRENT PATHNAME
  const { pathname } = window.location

  // GETTING ATOMIC STATES
  const [isDarkTheme, setDarkTheme] = useRecoilState(darkThemeAtom)

  // SETTING TOP ACTIONS
  const topActions = [
    {
      label: 'Generate',
      selectedIcon: <LocationOn />,
      unselectedIcon: <LocationOnOutlined />,
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
      link: routes.user({ id: '1' }),
      isSelected: pathname === routes.user({ id: '1' }),
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
    <>
      <SideNavigation
        logoUrl="https://res.cloudinary.com/dgu9rv3om/image/upload/v1683873993/tracepath/assets/logo1-cropped_hcmo16.png"
        topActions={topActions}
        bottomActions={bottomActions}
        size="large"
      />
      <PositionedScreen>{children}</PositionedScreen>
    </>
  )
}

export default NavigationLayout
