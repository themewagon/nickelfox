import { Stack, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Stack height="100vh" justifyContent="center">
      <Typography variant="h2" color="common.text">
        404
      </Typography>
      <Typography variant="h4" color="common.primary">
        Page does not exist!
      </Typography>
    </Stack>
  );
};

export default ErrorPage;
