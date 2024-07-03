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

  return <div>DataGridFooter</div>;
};

export default DataGridFooter;
