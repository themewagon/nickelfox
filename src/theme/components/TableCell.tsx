import { Theme, alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/px-to-rem';

const TableCell: Components<Omit<Theme, 'components'>>['MuiTableCell'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      borderBottomWidth: pxToRem(0.5),
      borderBottomStyle: 'solid',
      borderBottomColor: alpha(theme.palette.common.white, 0.06),
    }),
    head: ({ theme }) => ({
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
      color: theme.palette.text.primary,
    }),
    body: ({ theme }) => ({
      fontSize: theme.typography.h6.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
      color: theme.palette.common.white,
    }),
  },
};

export default TableCell;
