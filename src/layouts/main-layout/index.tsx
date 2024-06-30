import { Box, Drawer, Toolbar } from '@mui/material';
import { PropsWithChildren, ReactElement, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { closedMixin, openedMixin } from 'theme/mixins';

export const drawerOpenWidth = 160;
export const drawerCloseWidth = 88;

const MainLayout = ({ children }: PropsWithChildren): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />
      <Drawer
        variant="permanent"
        open={open}
        sx={(theme) => ({
          width: open ? drawerOpenWidth : drawerCloseWidth,
          ...(open && openedMixin(theme)),
          ...(!open && closedMixin(theme)),
          '& .MuiDrawer-paper': {
            width: open ? drawerOpenWidth : drawerCloseWidth,
            ...(open && openedMixin(theme)),
            ...(!open && closedMixin(theme)),
          },
        })}
      >
        <Sidebar open={open} />
      </Drawer>
      <Box
        component="main"
        overflow="auto"
        sx={(theme) => ({
          flexGrow: 1,
          pt: 5,
          pr: { xs: 2.5875, sm: 5.175 },
          pb: 6.25,
          pl: { xs: 2.625, sm: 5.25 },
          transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.short,
          }),
        })}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
