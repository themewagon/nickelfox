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

const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <>
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
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'text.primary',
                alignItems: 'center',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 'auto' : 0,
                  justifyContent: 'center',
                }}
              >
                <IconifyIcon icon={navItem.icon} width={1} height={1} />
              </ListItemIcon>
              <ListItemText
                primary={navItem.title}
                sx={{
                  display: open ? 'inline-block' : 'none',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
