import { createTheme } from '@mui/material';
import typography from './typography';
import palette from './palette';
import Paper from './components/Paper';
import Chip from './components/Chip';
import Stack from './components/Stack';
import Grid2 from './components/Grid2';
import Drawer from './components/Drawer';
import ListItemButton from './components/ListItemButton';
import List from './components/List';
import ListItemText from './components/ListItemText';
import ListItemIcon from './components/ListItemIcon';
import Button from './components/Button';
import AppBar from './components/Appbar';

const theme = createTheme({
  typography: typography,
  palette: palette,
  components: {
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiAppBar: AppBar,
    MuiButton: Button,
    MuiDrawer: Drawer,
    MuiGrid2: Grid2,
    MuiPaper: Paper,
    MuiStack: Stack,
    MuiChip: Chip,
    MuiList: List,
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 4,
});

export default theme;
