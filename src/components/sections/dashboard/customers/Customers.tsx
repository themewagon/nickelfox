import { useState, ChangeEvent, useCallback, ReactElement } from 'react';
import { Box, Paper, Stack, TextField, Typography, InputAdornment } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomerTable from './CustomerTable';
import { stone } from 'theme/colors';

const Customers = (): ReactElement => {
  const [search, setSearch] = useState<string>('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  }, []);

  return (
    <Paper sx={{ p: 3.5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
        flexWrap="wrap"
        gap={3}
      >
        <Typography variant="h4" color="common.white">
          Customers
        </Typography>
        <TextField
          variant="filled"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
          sx={{
            '.MuiFilledInput-root': {
              bgcolor: stone[800],
              ':hover': {
                bgcolor: 'background.default',
              },
              ':focus': {
                bgcolor: 'background.default',
              },
              ':focus-within': {
                bgcolor: 'background.default',
              },
            },
            borderRadius: 2,
            height: 40,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon="akar-icons:search" width={13} height={13} />
              </InputAdornment>
            ),
            sx: {
              // bgcolor: 'background.default',
            },
          }}
        />
      </Stack>
      <Box width={1} height={238}>
        <CustomerTable searchText={search} />
      </Box>
    </Paper>
  );
};

export default Customers;
