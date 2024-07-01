import { Theme } from '@mui/material';
import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

const DataGrid: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {},
  styleOverrides: {},
};

export default DataGrid;
