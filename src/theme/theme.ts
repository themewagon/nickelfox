import { createTheme } from '@mui/material';

import InputAdornment from './components/InputAdornment';
import ListItemButton from './components/ListItemButton';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import CssBaseline from './components/CssBaseline';
import FilledInput from './components/FilledInput';
import IconButton from './components/IconButton';
import InputBase from './components/InputBase';
import AppBar from './components/Appbar';
import Avatar from './components/Avatar';
import Button from './components/Button';
import Drawer from './components/Drawer';
import Grid2 from './components/Grid2';
import Paper from './components/Paper';
import Stack from './components/Stack';
import Chip from './components/Chip';
import List from './components/List';

import typography from './typography';
import palette from './palette';

const theme = createTheme({
  typography: typography,
  palette: palette,
  components: {
    MuiInputAdornment: InputAdornment,
    MuiListItemButton: ListItemButton,
    MuiListItemIcon: ListItemIcon,
    MuiListItemText: ListItemText,
    MuiCssBaseline: CssBaseline,
    MuiFilledInput: FilledInput,
    MuiIconButton: IconButton,
    MuiInputBase: InputBase,
    MuiAppBar: AppBar,
    MuiAvatar: Avatar,
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
