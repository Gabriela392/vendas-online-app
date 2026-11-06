import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import type { ProductType } from '../../../shared/types/ProductType';
import TooltipImage from '../components/TooltipImage';
import { BoxButtons, LimiteSizeButton, LimiteSizeInput } from '../styles/product.style';
import type { ColumnsType } from 'antd/es/table';
import { convertNumberToMoney } from '../../../shared/functions/connection/money';
import CategoryColumn from '../components/CategoryColumm';
import { ProductRoutesEnum } from '../productRoutes';

const { Search } = Input;

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
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (_, product) => <CategoryColumn category={product.category} />,
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
  const [productsFiltered, setProdutsFiltered] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setProdutsFiltered([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    const term = value.trim().toLocaleLowerCase();

    if (!term) {
      setProdutsFiltered([...products]);
      return;
    }

    setProdutsFiltered(
      products.filter((product) => product.name.toLocaleLowerCase().includes(term)),
    );
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
      <BoxButtons>
        <LimiteSizeInput>
          <Search
            placeholder="Buscar produto"
            onChange={(event) => onSearch(event.target.value)}
          />
        </LimiteSizeInput>

        <LimiteSizeButton>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimiteSizeButton>
      </BoxButtons>
      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;