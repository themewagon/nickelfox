// import { useTheme } from '@emotion/react';
import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Scrollbar from 'components/scrollbar/Scrollbar';
import navItems from 'data/nav-items';

const Sidebar = ({ open }: { open: boolean }) => {
  // const theme = useTheme();
  return (
    <>
      <Scrollbar>
        <Toolbar />
        <List
          sx={{
            mx: 4,
            py: 2.5,
          }}
        >
          {navItems.map((navItem) => (
            <ListItem key={navItem.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                LinkComponent={Link}
                href={navItem.path}
                sx={{
                  bgcolor: navItem.active ? 'primary.main' : 'background.default',
                  '&:hover': {
                    bgcolor: navItem.active ? 'primary.dark' : 'background.paper',
                  },
                  '& .MuiTouchRipple-root': {
                    color: navItem.active ? 'primary.main' : 'text.disabled',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    mr: open ? 'auto' : 0,
                    color: navItem.active ? 'background.default' : 'text.primary',
                  }}
                >
                  <IconifyIcon icon={navItem.icon} width={1} height={1} />
                </ListItemIcon>
                <ListItemText
                  primary={navItem.title}
                  sx={{
                    display: open ? 'inline-block' : 'none',
                    opacity: open ? 1 : 0,
                    color: navItem.active ? 'background.default' : '',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Scrollbar>
    </>
  );
};

export default Sidebar;
