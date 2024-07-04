import { Stack } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { ReactElement } from 'react';

const DataGridFooter = (): ReactElement => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const rowsCount = apiRef.current.getRowsCount();

  console.log(apiRef);
  return (
    <Stack width={1} direction="row" justifyContent="space-between">
      <p>{page}</p>
      <p>{pageCount}</p>
      <p>{pageSize}</p>
      <p>{rowsCount}</p>
    </Stack>
  );
};

export default DataGridFooter;
