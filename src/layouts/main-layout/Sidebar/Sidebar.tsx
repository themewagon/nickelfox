import { ReactElement } from 'react';
import { List, Toolbar } from '@mui/material';
import navItems from 'data/nav-items';
import SimpleBar from 'simplebar-react';
import NavItem from './NavItem';

const Sidebar = ({ open }: { open: boolean }): ReactElement => {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <Toolbar
        sx={{
          height: 98,
        }}
      />
      <List
        sx={{
          py: 2.5,
          height: 724,
          justifyContent: 'space-between',
        }}
      >
        {navItems.map((navItem) => (
          <NavItem key={navItem.id} navItem={navItem} open={open} />
        ))}
      </List>
    </SimpleBar>
  );
};

export default Sidebar;
