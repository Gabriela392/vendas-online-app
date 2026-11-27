import { Input } from 'antd';
import { useMemo } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Table from '../../../shared/components/table/Table';
import TooltipImage from '../components/TooltipImage';
import { useProduct } from '../hooks/useProduct';
import type { ProductType } from '../../../shared/types/ProductType';
import type { ColumnsType } from 'antd/es/table';
import { DisplayFlexJustifyBetween } from '../../../shared/components/styles/display.style';
import { convertNumberToMoney } from '../../../shared/functions/connection/money';
import CategoryColumn from '../components/CategoryColumm';

const { Search } = Input;

const Product = () => {
  const {
    productsFiltered,
    handleOnClickInsert,
    onSearch,
    handleDeleteProduct,
  } = useProduct();

  const columns: ColumnsType<ProductType> = useMemo(
    () => [
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
        render: (_, product) => (
          <a>{convertNumberToMoney(product.price ?? 0)}</a>
        ),
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (_, product) => (
          <a onClick={() => handleDeleteProduct(product.id)}>Deletar</a>
        ),
      },
    ],
    [handleDeleteProduct],
  );

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
      <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
        <LimitedContainer width={240}>
          <Search
            placeholder="Buscar produto"
            onSearch={onSearch}
            enterButton
          />
        </LimitedContainer>

        <LimitedContainer width={120}>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitedContainer>
      </DisplayFlexJustifyBetween>
      <Table columns={columns} dataSource={productsFiltered} />
    </Screen>
  );
};

export default Product;
