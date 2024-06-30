import { Box, Chip, TableCell, TableRow } from '@mui/material';
import { ReactElement } from 'react';

type ProductItemProps = {
  id: string;
  name: string;
  color: string;
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
        <Box
          sx={{
            bgcolor: 'grey.900',
            maxWidth: 164,
            width: 1,
            height: 3,
          }}
        >
          <Box
            sx={{
              bgcolor: `${color}.main`,
              width: `${sales}%`,
              height: 1,
            }}
          />
        </Box>
      </TableCell>
      <TableCell align="center">
        <Chip label={`${sales}%`} color={color as any} variant="outlined" />
      </TableCell>
    </TableRow>
  );
};

export default ProductItem;
