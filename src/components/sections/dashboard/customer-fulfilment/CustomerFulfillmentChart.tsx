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
import {
  LegendOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
  GridOption,
} from 'echarts/types/dist/shared.js';

type CustomerFulfillmentChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: LineSeriesOption[];
  tooltip?: TooltipOption;
  legendData?: LegendOption;
  grid?: GridOption;
  xAxis?: XAXisOption[];
  yAxis?: YAXisOption[];
  colors?: string[];
  sx?: SxProps;
};

type CustomerFulfillmentChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const CustomerFulfillmentChart = ({
  chartRef,
  seriesData,
  tooltip,
  legendData,
  grid,
  xAxis,
  yAxis,
  colors,
  ...rest
}: CustomerFulfillmentChartProps): ReactElement => {
  const option: CustomerFulfillmentChartOptions = useMemo(
    () => ({
      color: colors,
      tooltip: tooltip,
      legend: legendData,
      grid: grid,
      xAxis: xAxis,
      yAxis: yAxis,
      series: seriesData,
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest} />;
};

export default CustomerFulfillmentChart;
