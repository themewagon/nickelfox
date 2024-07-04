import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { Box, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomerTable from './CustomerTable';

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
            ':focus': {
              bgcolor: 'background.default',
            },
            ':focus-within': {
              bgcolor: 'background.default',
            },
            '.MuiFilledInput-root': {
              bgcolor: 'background.default',
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