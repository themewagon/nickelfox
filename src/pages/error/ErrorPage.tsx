import { ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';

const ErrorPage = (): ReactElement => {
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center" gap={10}>
      <Typography variant="h1" color="text.secondary">
        Error 404
      </Typography>
      <Typography variant="h4" color="text.primary">
        Page does not exist!
      </Typography>
    </Stack>
  );
};

export default ErrorPage;
