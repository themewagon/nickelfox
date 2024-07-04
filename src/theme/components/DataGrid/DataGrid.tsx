import { Theme, alpha } from '@mui/material';
import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

const DataGrid: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: 'transparent',
      borderRadius: theme.shape.borderRadius * 2.5,
      '--DataGrid-rowBorderColor': alpha(theme.palette.common.white, 0.06),
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
        '*::-webkit-scrollbar-thumb': {
          background: theme.palette.info.main,
        },
      },
      '& .MuiDataGrid-container--top [role=row]': {
        background: theme.palette.background.paper,
      },
      '& .MuiDataGrid-scrollbar--vertical': {
        visibility: 'hidden',
      },
      '& .MuiDataGrid-scrollbar--horizontal': {
        visibility: 'hidden',
      },
      '& .MuiDataGrid-filler': {
        height: '0 !important',
      },
      '& .MuiDataGrid-scrollbarFiller': {
        minWidth: 0,
      },
    }),
    main: ({ theme }) => ({
      borderTopLeftRadius: theme.shape.borderRadius * 2.5,
      borderTopRightRadius: theme.shape.borderRadius * 2.5,
    }),
    cell: ({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.common.white,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      '&:focus': {
        outline: 'none !important',
      },
      '&:focus-within': {
        outline: 'none !important',
      },
    }),
    overlay: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
    }),
    footerContainer: ({ theme }) => ({
      justifyContent: 'normal',
      backgroundColor: theme.palette.background.paper,
      borderBottomLeftRadius: theme.shape.borderRadius * 2.5,
      borderBottomRightRadius: theme.shape.borderRadius * 2.5,
    }),
    columnHeader: () => ({
      '&:focus': {
        outline: 'none !important',
      },
      '&:focus-within': {
        outline: 'none !important',
      },
    }),
    columnHeaderTitle: ({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    }),
    columnSeparator: () => ({
      display: 'none',
    }),
    cellEmpty: () => ({
      display: 'none',
    }),
    row: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      '&:hover': {
        backgroundColor: theme.palette.background.paper,
      },
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: alpha(theme.palette.common.white, 0.06),
    }),
    scrollbar: () => ({
      '&.MuiDataGrid-scrollbar--horizontal': {
        scrollbarWidth: 'none',
      },
    }),
  },
};

export default DataGrid;
