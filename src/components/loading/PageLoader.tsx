import { ReactElement } from 'react';
import { Box, CircularProgress, Stack, StackOwnProps } from '@mui/material';
import { fuchsia, teal, bluishCyan, yellowOrange } from 'theme/colors';

const PageLoader = (props: StackOwnProps): ReactElement => {
  return (
    <Stack width={1} height={1} justifyContent="center" alignItems="center" {...props}>
      <Box height="10vh" width="25vw" textAlign="center">
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="page_loader_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={teal[100]} />
              <stop offset="33%" stopColor={fuchsia[100]} />
              <stop offset="67%" stopColor={bluishCyan[500]} />
              <stop offset="100%" stopColor={yellowOrange[300]} />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          size={150}
          thickness={5}
          sx={{ svg_circle: { stroke: 'url(#page_loader_gradient)' } }}
        />
      </Box>
    </Stack>
  );
};

export default PageLoader;
