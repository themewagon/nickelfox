import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const CssBaseline: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: () => ({
    html: {
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      boxSizing: 'border-box',
      scrollbarColor: '#21222D #171821',
    },
  }),
};

export default CssBaseline;
