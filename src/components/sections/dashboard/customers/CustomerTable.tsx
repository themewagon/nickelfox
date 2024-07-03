import { ReactElement, useEffect, useMemo, useState } from 'react';
import { Avatar, CircularProgress, Snackbar, Stack, Tooltip, Typography } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridApi,
  GridColDef,
  GridEventListener,
  GridRenderCellParams,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridSlots,
  GridTreeNodeWithRender,
  useGridApiRef,
} from '@mui/x-data-grid';
import { stringAvatar } from 'helpers/string-avatar';
import { rows as dataRows } from 'data/customer-data';
import IconifyIcon from 'components/base/IconifyIcon';
import { currencyFormat } from 'helpers/format-functions';

const CustomerTable = ({ searchText }: { searchText: string }): ReactElement => {
  const apiRef = useGridApiRef<GridApi>();
  const [rows, setRows] = useState(dataRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
    setSnackbarOpen(true);
  };
  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
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
      editable: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      resizable: false,
      editable: true,
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      resizable: false,
      editable: true,
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'billing-address',
      headerName: 'Billing Address',
      sortable: false,
      resizable: false,
      editable: true,
      flex: 1,
      minWidth: 170,
    },
    {
      field: 'total-spent',
      headerName: 'Total Spent',
      resizable: false,
      editable: true,
      sortable: false,
      flex: 1,
      minWidth: 60,
      renderCell: (params) => {
        return <Typography variant="body1">{currencyFormat(params.formattedValue)}</Typography>;
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      resizable: false,
      flex: 1,
      minWidth: 80,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={
                <IconifyIcon
                  color="primary.main"
                  icon="mdi:content-save"
                  sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
                />
              }
              label="Save"
              onClick={handleSaveClick(id)}
              size="small"
            />,
            <GridActionsCellItem
              icon={
                <IconifyIcon
                  color="text.secondary"
                  icon="iconamoon:sign-times-duotone"
                  sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
                />
              }
              label="Cancel"
              onClick={handleCancelClick(id)}
              size="small"
            />,
          ];
        }

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
            onClick={handleEditClick(id)}
            size="small"
          />,
          <GridActionsCellItem
            icon={
              <IconifyIcon
                icon="mingcute:delete-3-fill"
                color="text.secondary"
                sx={{ fontSize: 'body1.fontSize', pointerEvents: 'none' }}
              />
            }
            label="Delete"
            onClick={handleDeleteClick(id)}
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
        editMode="row"
        columns={visibleColumns}
        checkboxSelection
        disableColumnMenu
        disableRowSelectionOnClick
        rowModesModel={rowModesModel}
        processRowUpdate={processRowUpdate}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        rows={rows}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[7]}
        // autoPageSize
        slots={{
          loadingOverlay: CircularProgress as GridSlots['loadingOverlay'],
        }}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={(_event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setSnackbarOpen(false);
        }}
        message="Customer Deleted"
      />
    </>
  );
};

export default CustomerTable;
