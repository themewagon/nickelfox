import { SxProps, useTheme } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { GaugeSeriesOption } from 'echarts/charts';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { ReactElement, useMemo } from 'react';

type EarningsChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
};

type EarningsChartOptions = echarts.ComposeOption<
  GaugeSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const EarningsChart = ({ chartRef, ...rest }: EarningsChartProps): ReactElement => {
  const theme = useTheme();
  const option: EarningsChartOptions = useMemo(
    () => ({
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          radius: '150%',
          center: ['50%', '100%'],
          splitNumber: 10,
          itemStyle: {
            color: theme.palette.primary.main,
            borderWidth: 0,
          },
          progress: {
            show: true,
            roundCap: false,
            width: 22,
          },
          pointer: {
            icon: 'roundRect',
            length: '60%',
            width: 5,
            offsetCenter: [0, -48],
            itemStyle: {
              borderWidth: 20,
            },
          },
          axisLine: {
            roundCap: false,
            lineStyle: {
              width: 22,
              color: [[1, theme.palette.grey[900]]],
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 80,
            },
          ],
        },
      ],
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest}></ReactEChart>;
};

export default EarningsChart;
