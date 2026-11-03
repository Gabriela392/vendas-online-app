import TableAntD, { type TableProps } from 'antd/es/table';

function Table<RecordType extends object>(props: TableProps<RecordType>) {
    return <TableAntD {...props} />;
}

export default Table;