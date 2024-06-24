import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { productTableRows } from 'data/product-data';

const TopProducts = () => {
  return (
    <Paper sx={{ p: 3.5 }}>
      <Typography variant="h4" color="common.white">
        Top Products
      </Typography>
      <Table>
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
            <TableRow key={product.id}>
              <TableCell align="left" component="th" scope="row">
                0{product.id}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  whiteSpace: 'nowrap',
                }}
              >
                {product.name}
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
                      bgcolor: `${product.color}.main`,
                      width: `${product.sales}%`,
                      height: 1,
                    }}
                  />
                </Box>
              </TableCell>
              <TableCell align="center">
                <Chip
                  clickable
                  label={`${product.sales}%`}
                  color={product.color as any}
                  variant="outlined"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default TopProducts;
