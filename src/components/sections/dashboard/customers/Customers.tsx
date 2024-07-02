import { InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { ReactElement } from 'react';

const Customers = (): ReactElement => {
  return (
    <Paper sx={{ p: 3.5 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color="common.white">
          Customers
        </Typography>
        <TextField
          variant="filled"
          placeholder="Search..."
          sx={{
            bgcolor: 'background.default',
            borderRadius: 2,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="akar-icons:search" width={13} height={13} />
              </InputAdornment>
            ),
            sx: {
              bgcolor: 'background.default',
            },
          }}
        />
      </Stack>
    </Paper>
  );
};

export default Customers;
