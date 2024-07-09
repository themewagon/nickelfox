import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { productTableRows } from 'data/product-data';
import { ReactElement } from 'react';
import ProductItem from './ProductItem';

const TopProducts = (): ReactElement => {
  return (
    <Paper sx={{ p: 8, height: 1 }}>
      <Typography variant="h4" color="common.white">
        Top Products
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 440 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Popularity</TableCell>
              <TableCell align="center">Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productTableRows.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                color={product.color}
                sales={product.sales}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopProducts;
