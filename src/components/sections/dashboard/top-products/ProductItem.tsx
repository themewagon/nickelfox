import { Chip, LinearProgress, LinearProgressProps, TableCell, TableRow } from '@mui/material';
import { ReactElement } from 'react';

type ProductItemProps = {
  id: string;
  name: string;
  color: LinearProgressProps['color'];
  sales: number;
};

const ProductItem = ({ id, name, color, sales }: ProductItemProps): ReactElement => {
  return (
    <TableRow>
      <TableCell
        align="left"
        component="th"
        variant="head"
        scope="row"
        sx={{
          color: 'common.white',
        }}
      >
        {id}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </TableCell>
      <TableCell align="left">
        <LinearProgress
          variant="determinate"
          color={color}
          value={sales}
          sx={{
            bgcolor: 'grey.900',
          }}
        />
      </TableCell>
      <TableCell align="center">
        <Chip label={`${sales}%`} color={color as any} variant="outlined" />
      </TableCell>
    </TableRow>
  );
};

export default ProductItem;
