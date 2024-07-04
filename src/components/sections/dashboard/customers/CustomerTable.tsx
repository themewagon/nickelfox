import { ReactElement, useEffect, useMemo, useState } from 'react';
import { Avatar, CircularProgress, Stack, Tooltip, Typography } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridApi,
  GridColDef,
  GridRenderCellParams,
  GridSlots,
  GridTreeNodeWithRender,
  useGridApiRef,
} from '@mui/x-data-grid';
import { stringAvatar } from 'helpers/string-avatar';
import { rows as dataRows } from 'data/customer-data';
import IconifyIcon from 'components/base/IconifyIcon';
import { currencyFormat } from 'helpers/format-functions';
import DataGridFooter from 'components/common/DataGridFooter';

const CustomerTable = ({ searchText }: { searchText: string }): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();
  const [rows, setRows] = useState(dataRows);

  const columns: GridColDef<any>[] = [
    {
      field: 'id',
      headerName: 'ID',
      resizable: false,
      flex: 0.25,
      minWidth: 60,
    },
    {
      field: 'name',
      headerName: 'Name',
      valueGetter: (params: any) => {
        return params;
      },
      renderCell: (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
        return (
          <Stack direction="row" gap={1} alignItems="center">
            <Tooltip title={params.row.name} placement="top" arrow>
              <Avatar {...stringAvatar(params.row.name)} />
            </Tooltip>
            <Typography variant="body1">{params.row.name}</Typography>
          </Stack>
        );
      },
      resizable: false,
      flex: 1,
      minWidth: 135,
    },
    {
      field: 'email',
      headerName: 'Email',
      resizable: false,
      flex: 0.5,
      minWidth: 125,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      resizable: false,
      flex: 1,
      minWidth: 105,
    },
    {
      field: 'billing-address',
      headerName: 'Billing Address',
      sortable: false,
      resizable: false,
      flex: 1,
      minWidth: 180,
    },
    {
      field: 'total-spent',
      headerName: 'Total Spent',
      resizable: false,
      sortable: false,
      align: 'right',
      headerAlign: 'right',
      flex: 1,
      minWidth: 60,
      valueFormatter: (value) => {
        return currencyFormat(value, { minimumFractionDigits: 2 });
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      resizable: false,
      flex: 1,
      minWidth: 60,
      getActions: () => {
        return [
          <GridActionsCellItem
            icon={
              <IconifyIcon
                icon="fluent:edit-32-filled"
                color="text.secondary"
                sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
              />
            }
            label="Edit"
            size="small"
          />,
          <GridActionsCellItem
            icon={
              <IconifyIcon
                icon="mingcute:delete-3-fill"
                color="error.main"
                sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
              />
            }
            label="Delete"
            size="small"
          />,
        ];
      },
    },
  ];
  const visibleColumns = useMemo(
    () => columns.filter((column) => column.field !== 'id'),
    [columns],
  );

  useEffect(() => {
    apiRef.current.setQuickFilterValues(
      searchText.split(/\b\W+\b/).filter((word: string) => word !== ''),
    );
  }, [searchText]);

  return (
    <>
      <DataGrid
        apiRef={apiRef}
        density="compact"
        columns={visibleColumns}
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        rows={rows}
        initialState={
          {
            // pagination: { paginationModel: { page: 0, pageSize: 4 } },
          }
        }
        autoPageSize
        slots={{
          loadingOverlay: CircularProgress as GridSlots['loadingOverlay'],
          // pagination: DataGridFooter as GridSlots['pagination'],
        }}
        sx={{
          height: 1,
        }}
      />
    </>
  );
};

export default CustomerTable;
