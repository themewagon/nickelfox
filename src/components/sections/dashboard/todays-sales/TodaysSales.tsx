import { Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import SaleCard from './SaleCard';
import salesData from 'data/sales-data';
import { ReactElement } from 'react';

const TodaysSales = (): ReactElement => {
  return (
    <Paper sx={{ px: 3.5, py: 5 }}>
      <Stack gap={1} mb={5}>
        <Typography variant="h4" color="common.white">
          Today’s Sales
        </Typography>
        <Typography variant="h6" color="text.disabled">
          Sales Summary
        </Typography>
      </Stack>
      <Grid container columns={12} spacing={5} overflow="auto">
        {salesData.map((saleItem) => (
          <Grid key={saleItem.id} xs={6} sm={3}>
            <SaleCard
              icon={saleItem.icon}
              title={saleItem.title}
              subtitle={saleItem.subtitle}
              increment={saleItem.increment}
              color={saleItem.color}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TodaysSales;
