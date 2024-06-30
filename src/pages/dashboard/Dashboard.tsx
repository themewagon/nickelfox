import { ReactElement } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
import Level from 'components/sections/dashboard/level/Level';
import TrendingNow from 'components/sections/dashboard/trending-now/TrendingNow';

const Dashboard = (): ReactElement => {
  return (
    <>
      <Grid container columns={12} spacing={3.5} mx={0}>
        <Grid xs={12} md={8}>
          <TodaysSales />
        </Grid>
        <Grid xs={12} md={4}>
          <Level />
        </Grid>
        <Grid xs={12} md={8}>
          <TopProducts />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <CustomerFulfillment />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Earnings />
        </Grid>
        <Grid xs={12} md={8}>
          <VisitorInsights />
        </Grid>
        <Grid xs={12} lg={6}>
          <TrendingNow />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
