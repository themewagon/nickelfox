import { Paper, Stack, Typography } from '@mui/material';

const VisitorInsights = () => {
  return (
    <Paper sx={{ p: 3.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="common.white">
          Visitor Insights
        </Typography>
      </Stack>
    </Paper>
  );
};

export default VisitorInsights;
