import { useParams } from 'react-router-dom';
import { Descriptions, Divider } from 'antd';
import Screen from '../../../shared/components/screen/Screen';
import { OrderRoutesEnum } from '../routes';

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PEDIDOS',
          navigateTo: OrderRoutesEnum.ORDER,
        },
        {
          name: `Detalhes do Pedido #${orderId}`,
        },
      ]}
    >
      <Descriptions title="Dados do usuário" bordered>
        <Descriptions.Item label="Nome">...</Descriptions.Item>
        <Descriptions.Item label="Email" span={2}>
          ...
        </Descriptions.Item>
        <Descriptions.Item label="Telefone">...</Descriptions.Item>
        <Descriptions.Item label="CPF" span={2}>
          ...
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Descriptions title="Dados do pagamento" bordered>
        <Descriptions.Item label="Status">...</Descriptions.Item>
        <Descriptions.Item label="Tipo" span={2}>
          ...
        </Descriptions.Item>
        <Descriptions.Item label="Valor Total">...</Descriptions.Item>
      </Descriptions>

      <Divider />

      <Descriptions title="Dados do endereço" bordered>
        <Descriptions.Item label="Cidade">...</Descriptions.Item>
        <Descriptions.Item label="Estado">...</Descriptions.Item>
        <Descriptions.Item label="CEP">...</Descriptions.Item>
        <Descriptions.Item label="Logradouro / Número" span={2}>
          ...
        </Descriptions.Item>
      </Descriptions>

      <Divider />
    </Screen>
  );
};

export default OrderDetail;
