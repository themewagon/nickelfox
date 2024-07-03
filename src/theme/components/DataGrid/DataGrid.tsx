import { Theme } from '@mui/material';
import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

const DataGrid: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderColor: 'transparent',
      borderRadius: theme.shape.borderRadius * 2.5,
      '--DataGrid-rowBorderColor': theme.palette.background.default,
      '&:hover, &:focus': {
        '*::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },
        '*::-webkit-scrollbar-thumb': {
          background: theme.palette.info.main,
        },
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
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      borderTop: 'none',
      '&:focus': {
        outline: 'none !important',
      },
      '&:focus-within': {
        outline: 'none !important',
      },
    }),
    footerContainer: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
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
      '&:nth-of-type(2n)': {
        backgroundColor: theme.palette.background.default,
      },
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: theme.palette.background.default,
    }),
    scrollbar: () => ({
      '&.MuiDataGrid-scrollbar--horizontal': {
        scrollbarWidth: 'none',
      },
    }),
  },
};

export default DataGrid;
