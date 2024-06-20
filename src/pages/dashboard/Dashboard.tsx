import Grid from '@mui/material/Unstable_Grid2/Grid2';

import CustomerFulfillment from 'components/sections/dashboard/customer-fulfilment/CustomerFulfillment';
import VisitorInsights from 'components/sections/dashboard/visitor-insights/VisitorInsights';
import TodaysSales from 'components/sections/dashboard/todays-sales/TodaysSales';
import TopProducts from 'components/sections/dashboard/top-products/TopProducts';
import Earnings from 'components/sections/dashboard/earnings/Earnings';
import Level from 'components/sections/dashboard/level/Level';
import { Button } from '@mui/material';

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
      {/* Primary Text Buttons */}
      <Grid container xs={12} spacing={1}>
        <Grid xs={4}>
          <Button size="small" variant="text" color="primary">
            Small Text Primary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="medium" variant="text" color="primary">
            Medium Text Primary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="large" variant="text" color="primary">
            Large Text Primary
          </Button>
        </Grid>
      </Grid>
      {/* Primary Outlined Buttons */}
      <Grid container xs={12} spacing={1}>
        <Grid xs={4}>
          <Button size="small" variant="outlined" color="primary">
            Small Outlined Primary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="medium" variant="outlined" color="primary">
            Medium Outlined Primary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="large" variant="outlined" color="primary">
            Large Outlined Primary
          </Button>
        </Grid>
      </Grid>
      {/* Primary Contained Buttons */}
      <Grid container xs={12} spacing={1}>
        <Grid xs={4}>
          <Button size="small" variant="contained" color="primary">
            Small Contained Primary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="medium" variant="contained" color="primary">
            Medium Contained Primary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="large" variant="contained" color="primary">
            Large Contained Primary
          </Button>
        </Grid>
      </Grid>
      {/* Secondary Text Buttons */}
      <Grid container xs={12} spacing={1}>
        <Grid xs={4}>
          <Button size="small" variant="text" color="secondary">
            Small Text Secondary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="medium" variant="text" color="secondary">
            Medium Text Secondary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="large" variant="text" color="secondary">
            Large Text Secondary
          </Button>
        </Grid>
      </Grid>
      {/* Secondary Outlined Buttons */}
      <Grid container xs={12} spacing={1}>
        <Grid xs={4}>
          <Button size="small" variant="outlined" color="secondary">
            Small Outlined Secondary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="medium" variant="outlined" color="secondary">
            Medium Outlined Secondary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="large" variant="outlined" color="secondary">
            Large Outlined Secondary
          </Button>
        </Grid>
      </Grid>
      {/* Secondary Contained Buttons */}
      <Grid container xs={12} spacing={1}>
        <Grid xs={4}>
          <Button size="small" variant="contained" color="secondary">
            Small Contained Secondary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="medium" variant="contained" color="secondary">
            Medium Contained Secondary
          </Button>
        </Grid>
        <Grid xs={4}>
          <Button size="large" variant="contained" color="secondary">
            Large Contained Secondary
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
