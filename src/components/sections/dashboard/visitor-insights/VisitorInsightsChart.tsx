import { SxProps } from '@mui/material';
import ReactEChart from 'components/base/ReactEChart';
import * as echarts from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { LineSeriesOption } from 'echarts/charts';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { ReactElement, useMemo } from 'react';
import {
  GridOption,
  LegendOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
} from 'echarts/types/dist/shared.js';

type VisitorInsightsChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  seriesData?: LineSeriesOption[];
  tooltip?: TooltipOption;
  grid?: GridOption;
  legendData?: LegendOption;
  xAxis?: XAXisOption[];
  yAxis?: YAXisOption[];
  sx?: SxProps;
};

type VisitorInsightsChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const VisitorInsightsChart = ({
  chartRef,
  seriesData,
  tooltip,
  legendData,
  grid,
  xAxis,
  yAxis,
  ...rest
}: VisitorInsightsChartProps): ReactElement => {
  const option: VisitorInsightsChartOptions = useMemo(
    () => ({
      tooltip: tooltip,
      legend: legendData,
      grid: grid,
      xAxis: xAxis,
      yAxis: yAxis,
      series: seriesData,
    }),
    [],
  );
  return <ReactEChart ref={chartRef} echarts={echarts} option={option} {...rest} />;
};

export default VisitorInsightsChart;
