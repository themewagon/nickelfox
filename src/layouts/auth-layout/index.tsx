import { ReactElement, PropsWithChildren } from 'react';
import { Stack, Grid } from '@mui/material';

const AuthLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Stack minHeight="100vh" justifyContent="center" py={10}>
      <Grid container columns={12} spacing={1} justifyContent="center" alignItems="center" mx={0}>
        <Grid item xs={10} sm={8} md={6} lg={5} xl={4}>
          {children}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default AuthLayout;
