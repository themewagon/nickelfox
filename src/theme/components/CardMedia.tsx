import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CardMedia: Components<Omit<Theme, 'components'>>['MuiCardMedia'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: theme.spacing(27.5),
    }),
  },
};

export default CardMedia;
