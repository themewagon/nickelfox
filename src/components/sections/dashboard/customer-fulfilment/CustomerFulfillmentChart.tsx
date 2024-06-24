import { ReactElement, useMemo } from 'react';
import * as echarts from 'echarts';
import { LineSeriesOption } from 'echarts';
import ReactEChart from 'components/base/ReactEChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { SxProps } from '@mui/material';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';

type CustomerFulfillmentChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: LineSeriesOption[];
  legendData?: any;
  colors?: string[];
  sx?: SxProps;
};

type CustomerFulfillmentChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const CustomerFulfillmentChart = ({
  chartRef,
  seriesData,
  legendData,
  colors,
  ...rest
}: CustomerFulfillmentChartProps): ReactElement => {
  const option: CustomerFulfillmentChartOptions = useMemo(
    () => ({
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        show: false,
        data: legendData,
      },
      grid: {
        top: '0%',
        right: '2%',
        bottom: '-13%',
        left: '-15%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          show: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          show: false,
        },
      ],
      series: seriesData,
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest} />;
};

export default CustomerFulfillmentChart;
