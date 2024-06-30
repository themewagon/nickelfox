import { Components, Theme } from '@mui/material';

import InputAdornment from './components/InputAdornment';
import ListItemButton from './components/ListItemButton';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import CssBaseline from './components/CssBaseline';
import FilledInput from './components/FilledInput';
import IconButton from './components/IconButton';
import InputBase from './components/InputBase';
import TableCell from './components/TableCell';
import AppBar from './components/Appbar';
import Avatar from './components/Avatar';
import Button from './components/Button';
import Drawer from './components/Drawer';
import Grid2 from './components/Grid2';
import Paper from './components/Paper';
import Stack from './components/Stack';
import Chip from './components/Chip';
import List from './components/List';
import InputLabel from './components/InputLabel';
import TextField from './components/TextField';
import OutlinedInput from './components/OutlinedInput';

const components: Components<Omit<Theme, 'components'>> = {
  MuiInputAdornment: InputAdornment,
  MuiListItemButton: ListItemButton,
  MuiOutlinedInput: OutlinedInput,
  MuiListItemIcon: ListItemIcon,
  MuiListItemText: ListItemText,
  MuiCssBaseline: CssBaseline,
  MuiFilledInput: FilledInput,
  MuiIconButton: IconButton,
  MuiInputLabel: InputLabel,
  MuiInputBase: InputBase,
  MuiTableCell: TableCell,
  MuiTextField: TextField,
  MuiAppBar: AppBar,
  MuiAvatar: Avatar,
  MuiButton: Button,
  MuiDrawer: Drawer,
  MuiGrid2: Grid2,
  MuiPaper: Paper,
  MuiStack: Stack,
  MuiChip: Chip,
  MuiList: List,
};

export default components;
