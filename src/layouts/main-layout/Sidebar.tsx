import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Link,
  List,
  Toolbar,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import navItems from 'data/nav-items';
import SimpleBar from 'simplebar-react';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  const { pathname } = useLocation();

  return (
    <>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Toolbar
          sx={{
            height: 98,
          }}
        />
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
                px: 10,
                borderRight: !open
                  ? pathname === navItem.path
                    ? `3px solid ${theme.palette.primary.main}`
                    : `3px solid transparent`
                  : '',
                transition:
                  pathname === navItem.path
                    ? theme.transitions.create('all', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                      })
                    : '',
              })}
            >
              <ListItemButton
                LinkComponent={Link}
                href={navItem.path}
                // disabled={!navItem.active}
                sx={(theme) => ({
                  opacity: navItem.active ? 1 : 0.5,
                  bgcolor:
                    pathname === navItem.path ? (open ? 'primary.main' : '') : 'background.default',
                  '&:hover': {
                    bgcolor:
                      pathname === navItem.path
                        ? open
                          ? 'primary.dark'
                          : 'background.paper'
                        : 'background.paper',
                  },
                  '& .MuiTouchRipple-root': {
                    color: pathname === navItem.path ? 'primary.main' : 'text.disabled',
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
                    width: 20,
                    height: 20,
                    mr: open ? 'auto' : 0,
                    color:
                      pathname === navItem.path
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
                    color: pathname === navItem.path ? 'background.default' : '',
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
