import { ReactElement } from 'react';
// import Grid from '@mui/material/Unstable_Grid2/Grid2';

import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import TrendingNow from 'components/sections/dashboard/trending-now/TrendingNow';
import Customers from 'components/sections/dashboard/customers/Customers';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
import Level from 'components/sections/dashboard/level/Level';
import { Box } from '@mui/material';

const Dashboard = (): ReactElement => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        <Box gridColumn={{ xs: 'span 8' }}>
          <TodaysSales />
        </Box>
        <Box gridColumn={{ xs: 'span 4' }}>
          <Level />
        </Box>
        <Box gridColumn={{ xs: 'span 8' }}>
          <TopProducts />
        </Box>
        <Box gridColumn={{ xs: 'span 4' }}>
          <CustomerFulfillment />
        </Box>
        <Box gridColumn={{ xs: 'span 4' }}>
          <Earnings />
        </Box>
        <Box gridColumn={{ xs: 'span 8' }}>
          <VisitorInsights />
        </Box>
        <Box gridColumn={{ xs: 'span 6' }}>
          <TrendingNow />
        </Box>
        <Box gridColumn={{ xs: 'span 6' }}>
          <Customers />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
