import { SxProps } from '@mui/material';
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
  seriesData?: GaugeSeriesOption[];
  sx?: SxProps;
};

type EarningsChartOptions = echarts.ComposeOption<
  GaugeSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const EarningsChart = ({ chartRef, seriesData, ...rest }: EarningsChartProps): ReactElement => {
  const option: EarningsChartOptions = useMemo(
    () => ({
      series: seriesData,
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest}></ReactEChart>;
};

export default EarningsChart;
