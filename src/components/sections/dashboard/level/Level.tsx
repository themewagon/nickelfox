import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { ReactElement, useRef } from 'react';
import LevelChart from './LevelChart';

const levelChartData = {
  Service: [43, 52, 51, 57, 29, 22],
  Volume: [44, 55, 36, 22, 32, 44],
};

const Level = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

  return (
    <Paper sx={{ p: 8, height: 1 }}>
      <Typography variant="h4" color="common.white">
        Level
      </Typography>
      <Stack
        flex={1}
        pt={5.5}
        borderBottom={0.5}
        justifyContent="flex-end"
        sx={{
          borderBottomColor: alpha(theme.palette.common.white, 0.06),
        }}
      >
        <LevelChart
          chartRef={chartRef}
          data={levelChartData}
          sx={{ height: '181px !important', flexGrow: 1 }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 19 }}
          />
        }
        px={2}
        pt={3}
      >
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            p: 0.5,
            borderRadius: 1,
            gap: 1,
            color: 'text.disabled',
            fontSize: 'body2.fontSize',
            alignItems: 'baseline',
            '&:hover': {
              bgcolor: 'transparent',
            },
          }}
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'grey.900',
                borderRadius: 400,
              }}
            />
          }
        >
          Service
        </Button>
        <Button
          variant="text"
          sx={{
            justifyContent: 'flex-start',
            p: 0.5,
            borderRadius: 1,
            gap: 1,
            color: 'text.disabled',
            fontSize: 'body2.fontSize',
            alignItems: 'baseline',
            '&:hover': {
              bgcolor: 'transparent',
            },
            '& .MuiButton-startIcon': {
              mx: 0,
            },
          }}
          disableRipple
          startIcon={
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'primary.main',
                borderRadius: 400,
              }}
            />
          }
        >
          Volume
        </Button>
      </Stack>
    </Paper>
  );
};

export default Level;
