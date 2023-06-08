import {
  styled,
  Menu as MuiMenu,
  Paper as MuiPaper,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
} from '@mui/material'

// CUSTOM MENU
const CustomPaper = styled(MuiPaper)(() => ({}))
const CustomMenu = styled(MuiMenu)(() => ({
  '& .MuiList-root': {
    padding: '10px',
  },
  '& .MuiMenu-paper': {
    borderRadius: '25px',
  },
}))
const CustomMenuItem = styled(MuiMenuItem)(() => ({}))
const CustomListItemIcon = styled(MuiListItemIcon)(() => ({}))
const CustomListItemText = styled(MuiListItemText)(() => ({}))

const Menu = ({ anchorEl, open, onClose, menuItems, ...props }) => {
  return (
    <CustomPaper>
      <CustomMenu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        {...props}
        className={(props.className ? props.className : '') + ' menu'}
      >
        {menuItems &&
          menuItems.map((menuItem, index) => {
            return (
              <CustomMenuItem onClick={menuItem.onClick} key={index}>
                {menuItem.icon && (
                  <CustomListItemIcon>{menuItem.icon}</CustomListItemIcon>
                )}
                {menuItem.label && (
                  <CustomListItemText>{menuItem.label}</CustomListItemText>
                )}
              </CustomMenuItem>
            )
          })}
      </CustomMenu>
    </CustomPaper>
  )
}

export default Menu
