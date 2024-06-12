import { Chip, Paper, Typography } from '@mui/material';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';

const Dashboard = () => {
  return (
    <>
      <Typography variant="subtitle2">Dashboard</Typography>
      <Paper sx={{ width: 200, height: 200 }} />
      <Chip label="Small" color="primary" />
      <Chip label="Medium" size="medium" />
      <TodaysSales />
    </>
  );
};

export default Dashboard;
