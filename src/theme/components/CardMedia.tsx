import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CardMedia: Components<Omit<Theme, 'components'>>['MuiCardMedia'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({}) => ({
      // height: theme.spacing(48.125),
    }),
  },
};

export default CardMedia;
