import { Components, Theme } from '@mui/material';

import InputAdornment from './components/InputAdornment';
import ListItemButton from './components/ListItemButton';
import OutlinedInput from './components/OutlinedInput';
import ListItemIcon from './components/ListItemIcon';
import ListItemText from './components/ListItemText';
import CssBaseline from './components/CssBaseline';
import FilledInput from './components/FilledInput';
import ButtonBase from './components/ButtonBase';
import IconButton from './components/IconButton';
import InputLabel from './components/InputLabel';
import InputBase from './components/InputBase';
import TableCell from './components/TableCell';
import TextField from './components/TextField';
import MenuItem from './components/MenuItem';
import Divider from './components/Divider';
import AppBar from './components/Appbar';
import Avatar from './components/Avatar';
import Button from './components/Button';
import Drawer from './components/Drawer';
import Grid2 from './components/Grid2';
import Paper from './components/Paper';
import Stack from './components/Stack';
import Chip from './components/Chip';
import List from './components/List';
import Menu from './components/Menu';

import DataGrid from './components/DataGrid/DataGrid';
import Card from './components/Card';
import LinearProgress from './components/LinearProgress';

const components: Components<Omit<Theme, 'components'>> = {
  MuiInputAdornment: InputAdornment,
  MuiLinearProgress: LinearProgress,
  MuiListItemButton: ListItemButton,
  MuiOutlinedInput: OutlinedInput,
  MuiListItemIcon: ListItemIcon,
  MuiListItemText: ListItemText,
  MuiCssBaseline: CssBaseline,
  MuiFilledInput: FilledInput,
  MuiButtonBase: ButtonBase,
  MuiIconButton: IconButton,
  MuiInputLabel: InputLabel,
  MuiInputBase: InputBase,
  MuiTableCell: TableCell,
  MuiTextField: TextField,
  MuiDataGrid: DataGrid,
  MuiMenuItem: MenuItem,
  MuiDivider: Divider,
  MuiAppBar: AppBar,
  MuiAvatar: Avatar,
  MuiButton: Button,
  MuiDrawer: Drawer,
  MuiGrid2: Grid2,
  MuiPaper: Paper,
  MuiStack: Stack,
  MuiCard: Card,
  MuiChip: Chip,
  MuiList: List,
  MuiMenu: Menu,
};

export default components;
