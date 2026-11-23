import { useParams } from 'react-router-dom';
import { Descriptions, Divider, Spin } from 'antd';
import Screen from '../../../shared/components/screen/Screen';
import { OrderRoutesEnum } from '../routes';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { convertNumberToMoney } from '../../../shared/functions/connection/money';

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);

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
      {loading ? (
        <Spin />
      ) : (
        <>
          <Descriptions title="Dados do usuário" bordered>
            <Descriptions.Item label="Nome">
              {order?.user?.name || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order?.user?.email || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">
              {order?.user?.phone || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {order?.user?.cpf || '-'}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Status">
              {order?.payment?.paymentStatus?.name || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo" span={2}>
              {order?.payment?.type || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Valor Total">
              {convertNumberToMoney(order?.payment?.finalPrice || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {convertNumberToMoney(order?.payment?.discount || 0)}
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Cidade">
              {order?.address?.city?.name || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Estado">
              {order?.address?.city?.state?.name || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="CEP">
              {order?.address?.cep || '-'}
            </Descriptions.Item>
            <Descriptions.Item label="Logradouro / Número" span={2}>
              {`${order?.address?.complement || ''} - Nº ${order?.address?.numberAddress || ''}`}
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
