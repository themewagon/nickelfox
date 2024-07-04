import { LinearProgressProps } from '@mui/material';

export function createData(
  id: string,
  name: string,
  color: LinearProgressProps['color'],
  sales: number,
): {
  id: string;
  name: string;
  color: LinearProgressProps['color'];
  sales: number;
} {
  return { id, name, color, sales };
}
