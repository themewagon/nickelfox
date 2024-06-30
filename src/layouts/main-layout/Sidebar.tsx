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
import navItems from 'data/nav-items';
import { ReactElement } from 'react';
import SimpleBar from 'simplebar-react';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Toolbar />
        <List
          sx={{
            py: 2.5,
          }}
        >
          {navItems.map((navItem) => (
            <ListItem
              key={navItem.id}
              disablePadding
              sx={(theme) => ({
                display: 'block',
                px: 4,
                borderRight: !open
                  ? navItem.active
                    ? `3px solid ${theme.palette.primary.main}`
                    : `3px solid transparent`
                  : '',
              })}
            >
              <ListItemButton
                LinkComponent={Link}
                href={navItem.path}
                sx={(theme) => ({
                  bgcolor: navItem.active ? (open ? 'primary.main' : '') : 'background.default',
                  '&:hover': {
                    bgcolor: navItem.active ? (open ? 'primary.dark' : '') : 'background.default',
                  },
                  '& .MuiTouchRipple-root': {
                    color: navItem.active ? 'primary.main' : 'text.disabled',
                  },
                  transition: open
                    ? theme.transitions.create('all', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                      })
                    : theme.transitions.create('all', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                      }),
                })}
              >
                <ListItemIcon
                  sx={(theme) => ({
                    mr: open ? 'auto' : 0,
                    color: navItem.active
                      ? open
                        ? 'background.default'
                        : 'primary.main'
                      : 'text.primary',
                    transition: open
                      ? theme.transitions.create('all', {
                          easing: theme.transitions.easing.sharp,
                          duration: theme.transitions.duration.enteringScreen,
                        })
                      : theme.transitions.create('all', {
                          easing: theme.transitions.easing.sharp,
                          duration: theme.transitions.duration.leavingScreen,
                        }),
                  })}
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
      </SimpleBar>
    </>
  );
};

export default Sidebar;
