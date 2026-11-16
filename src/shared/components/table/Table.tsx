import { Table as TableAntD, type TableProps } from 'antd';

function Table<RecordType extends object>(props: TableProps<RecordType>) {
  return <TableAntD {...props} />;
}

export default Table;
