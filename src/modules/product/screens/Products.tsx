import type { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';

import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import type { ProductType } from '../../../shared/types/ProductType';
import { bakeryProductsMock } from '../mocks/products.mock';
import CategoryColumm from '../components/CategoryColumm';
import TooltipImage from '../components/TooltipImage';

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
    render: (text) => <a>{text}</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, (response) => {
      setProducts(response.length > 0 ? response : bakeryProductsMock);
    });
  }, []);

  return <Table columns={columns} dataSource={products} rowKey="id" />;
};

export default Product;