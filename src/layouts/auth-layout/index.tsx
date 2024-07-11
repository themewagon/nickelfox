import { ReactElement, PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const AuthLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Stack minHeight="100vh" justifyContent="center" py={10}>
      <Grid container columns={12} spacing={1} justifyContent="center" alignItems="center" mx={0}>
        <Grid xs={10} sm={8} md={6} lg={5} xl={4}>
          {children}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AuthLayout;
