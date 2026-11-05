import type { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';

import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import type { ProductType } from '../../../shared/types/ProductType';
import Screen from '../../../shared/components/screen/Screen';
import { bakeryProductsMock } from '../mocks/products.mock';
import CategoryColumm from '../components/CategoryColumm';
import TooltipImage from '../components/TooltipImage';
import { convertNumberToMoney } from '../../../shared/functions/connection/money';
import Button from '../../../shared/components/buttons/button/button';
import { useNavigate } from 'react-router-dom';
import { ProductRoutesEnum } from '../routes';

const columns: ColumnsType<ProductType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: ['category', 'name'],
    key: 'category',
    render: (_, product) => <CategoryColumm category={product.category} />,
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{convertNumberToMoney(product.price ?? 0)}</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, (response) => {
      setProducts(response.length > 0 ? response : bakeryProductsMock);
    });
  }, []);

  const handleInsertProduct = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
        },
      ]}
    >
      <Button onClick={handleInsertProduct}>Inserir produto</Button>
      <Table columns={columns} dataSource={products} />
    </Screen>
  );
}

export default Product;