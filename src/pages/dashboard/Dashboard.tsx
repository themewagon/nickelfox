import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
import Level from 'components/sections/dashboard/level/Level';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';

const Dashboard = () => {
  return (
    <Grid container columns={12} spacing={3.5}>
      <Grid xs={8}>
        <TodaysSales />
      </Grid>
      <Grid xs={4}>
        <Level />
      </Grid>
      <Grid xs={8}>
        <TopProducts />
      </Grid>
      <Grid xs={4}>
        <CustomerFulfillment />
      </Grid>
      <Grid xs={4}>
        <Earnings />
      </Grid>
      <Grid xs={8}>
        <VisitorInsights />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
