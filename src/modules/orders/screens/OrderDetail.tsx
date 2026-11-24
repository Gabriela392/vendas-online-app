import { Descriptions, Divider, Spin } from 'antd';
import { useParams } from 'react-router-dom';

import Screen from '../../../shared/components/screen/Screen';
import ListOrderProduct from '../components/ListOrderProduct';
import { useOrderDetail } from '../hooks/useOrderDetail';
import { OrderRoutesEnum } from '../routes';
import { DisplayFlexJustifyCenter } from '../../../shared/components/styles/display.style';
import { convertNumberToMoney } from '../../../shared/functions/connection/money';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { insertMaskInCEP } from '../../../shared/functions/address';

const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { order, loading } = useOrderDetail(orderId);
  const orderItemsTotalInCents = (order?.ordersProduct || []).reduce(
    (total, orderProduct) =>
      total +
      Math.round(Number(orderProduct.price) * 100) * orderProduct.amount,
    0,
  );
  const paymentPriceInCents = order?.ordersProduct?.length
    ? orderItemsTotalInCents
    : Math.round((order?.payment?.price || 0) * 100);
  const discountInCents = Math.round((order?.payment?.discount || 0) * 100);

  console.log('order', order);
  console.log('loading', loading);

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
          name: 'Detalhes',
        },
      ]}
    >
      {!order || loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <Descriptions title="Dados do usuário" bordered>
            <Descriptions.Item label="Nome">
              {order.user?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {order.user?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">
              {insertMaskInPhone(order.user?.phone || '')}
            </Descriptions.Item>
            <Descriptions.Item label="CPF" span={2}>
              {insertMaskInCpf(order.user?.cpf || '')}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do pagamento" bordered>
            <Descriptions.Item label="Preço">
              {convertNumberToMoney(paymentPriceInCents / 100)}
            </Descriptions.Item>
            <Descriptions.Item label="Desconto" span={2}>
              {convertNumberToMoney(order.payment?.discount || 0)}
            </Descriptions.Item>
            <Descriptions.Item label="Preço Final">
              {convertNumberToMoney(
                (paymentPriceInCents - discountInCents) / 100,
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Tipo de pagamento" span={2}>
              {order.payment?.type}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={2}>
              {order.payment?.paymentStatus?.name}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <Descriptions title="Dados do endereço" bordered>
            <Descriptions.Item label="Cidade">
              {order.address?.city?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Estado">
              {order.address?.city?.state?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Complemento">
              {order.address?.complement}
            </Descriptions.Item>
            <Descriptions.Item label="Número">
              {order.address?.numberAddress}
            </Descriptions.Item>
            <Descriptions.Item label="CEP" span={2}>
              {insertMaskInCEP(order.address?.cep || '')}
            </Descriptions.Item>
          </Descriptions>
          <Divider />
          <ListOrderProduct ordersProduct={order.ordersProduct} />
        </>
      )}
    </Screen>
  );
};

export default OrderDetail;
