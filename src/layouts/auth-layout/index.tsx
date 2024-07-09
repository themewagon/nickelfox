import { ReactElement, PropsWithChildren } from 'react';
import { Box, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const AuthLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Stack minHeight="100vh" justifyContent="center" py={10}>
      <Grid2 container columns={12} spacing={1} justifyContent="center" alignItems="center" mx={0}>
        <Grid2 xs={10} sm={8} md={6} lg={5} xl={4}>
          <Box
            sx={{
              px: 5,
            }}
          >
            {children}
          </Box>
        </Grid2>
      </Grid2>
    </Stack>
  );
};

export default AuthLayout;
