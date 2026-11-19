import type { ColumnsType } from 'antd/es/table';
import type { OrderType } from '../../../store/types/OrderType';
import Table from 'antd/es/table';
import Screen from '../../../shared/components/screen/Screen';
import { useOrder } from '../hooks/useOrder';

const columns: ColumnsType<OrderType> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Usuário',
    dataIndex: 'user',
    key: 'user',
    render: (_, target) => <a>{target.user?.name}</a>,
  },
  {
    title: 'Qtd. Produtos',
    dataIndex: 'amountProducts',
    key: 'amountProducts',
    render: (text) => <a>{text}</a>,
  },
];

const Order = () => {
  const { orders } = useOrder();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
        },
      ]}
    >
      <Table columns={columns} dataSource={orders} />
    </Screen>
  );
};

export default Order;
