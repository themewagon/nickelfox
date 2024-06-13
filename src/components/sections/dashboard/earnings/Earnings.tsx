import { Paper, Stack, Typography } from '@mui/material';

const Earnings = () => {
  return (
    <Paper sx={{ px: 3.5, py: 5 }}>
      <Stack gap={1} mb={5}>
        <Typography variant="h4" color="common.white">
          Earnings
        </Typography>
        <Typography variant="h6" color="text.primary">
          Total Expense
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Earnings;
