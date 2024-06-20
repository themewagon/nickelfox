import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
    }),
    input: ({ theme }) => ({
      paddingTop: theme.spacing(3.625),
      paddingBottom: theme.spacing(3.625),
    }),
  },
};

export default FilledInput;
