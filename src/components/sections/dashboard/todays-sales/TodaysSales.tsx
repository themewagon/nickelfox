import { Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import SaleCard from './SaleCard';
import totalSales from 'assets/todays-sales/total-sales.png';
import totalOrder from 'assets/todays-sales/total-order.png';
import productSold from 'assets/todays-sales/product-sold.png';
import newCustomer from 'assets/todays-sales/new-customer.png';

const TodaysSales = () => {
  return (
    <Paper sx={{ px: 3.5, py: 5 }}>
      <Stack gap={1} mb={5}>
        <Typography variant="h4">Today’s Sales</Typography>
        <Typography variant="h6">Sales Summary</Typography>
      </Stack>
      <Grid container columns={12} spacing={5}>
        <Grid xs={3}>
          <SaleCard
            icon={totalSales}
            title="$5k"
            subtitle="Total Sales"
            increment={10}
            color="warning.main"
          />
        </Grid>
        <Grid xs={3}>
          <SaleCard
            icon={totalOrder}
            title="500"
            subtitle="Total Order"
            increment={10}
            color="primary.main"
          />
        </Grid>
        <Grid xs={3}>
          <SaleCard
            icon={productSold}
            title="9"
            subtitle="Product Sold"
            increment={10}
            color="secondary.main"
          />
        </Grid>
        <Grid xs={3}>
          <SaleCard
            icon={newCustomer}
            title="12"
            subtitle="New Customer"
            increment={10}
            color="info.main"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodaysSales;
