import { Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import {
  DisplayFlexJustifyCenter,
  DisplayFlex,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import type { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../../category/hooks/useCategory';
import { LimitedContainer } from '../../login/styles/loginScreen.styles';
import { ProductInsertTestIdEnum } from '../enum/ProductInsertTestIdEnum';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductRoutesEnum } from '../productRoutes';
import Screen from '../../../shared/components/screen/Screen';

const ProductInsert = () => {
  const {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
  } = useInsertProduct();
  const { categories } = useCategory();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      <DisplayFlexJustifyCenter
        data-testid={ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER}
      >
        <LimitedContainer style={{ width: 400 }}>
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_NAME}
            onChange={(event) => onChangeInput(event, 'name')}
            value={product.name}
            style={{ margin: '0px 0px 16px 0px' }}
            title="Nome"
            placeholder="Nome"
          />
          <Input
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
            onChange={(event) => onChangeInput(event, 'image')}
            value={product.image}
            style={{ margin: '0px 0px 16px 0px' }}
            title="Url imagem"
            placeholder="Url imagem"
          />
          <InputMoney
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_PRICE}
            onChange={(event) => onChangeInput(event, 'price', true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <Select
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_SELECT}
            title="Categoria"
            style={{ margin: '0px 0px 16px 0px' }}
            onChange={handleChangeSelect}
            options={categories.map((category: CategoryType) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DisplayFlex>
            <InputMoney
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
              addonBefore="Kg"
              onChange={(event) => onChangeInput(event, 'weight', true)}
              value={product.weight}
              margin="0px 16px 16px 0px"
              title="Peso"
              placeholder="Peso"
            />
            <InputMoney
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
              addonBefore="cm"
              onChange={(event) => onChangeInput(event, 'length', true)}
              value={product.length}
              margin="0px 0px 16px 0px"
              title="Comprimento"
              placeholder="Comprimento"
            />
          </DisplayFlex>
          <DisplayFlex>
            <InputMoney
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
              onChange={(event) => onChangeInput(event, 'height', true)}
              value={product.height}
              addonBefore="cm"
              margin="0px 16px 16px 0px"
              title="Altura"
              placeholder="Altura"
            />
            <InputMoney
              data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
              onChange={(event) => onChangeInput(event, 'width', true)}
              value={product.width}
              addonBefore="cm"
              margin="0px 0px 16px 0px"
              title="Largura"
              placeholder="Largura"
            />
          </DisplayFlex>
          <InputMoney
            data-testid={ProductInsertTestIdEnum.PRODUCT_INPUT_IMAGE}
            onChange={(event) => onChangeInput(event, 'diameter', true)}
            value={product.diameter}
            addonBefore="cm"
            margin="0px 0px 32px 0px"
            title="Diâmetro"
            placeholder="Diâmetro"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer style={{ width: 120, margin: '0px 8px' }}>
              <Button
                data-testid={ProductInsertTestIdEnum.PRODUCT_BUTTON_CANCEL}
                danger
                onClick={handleOnClickCancel}
              >
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer style={{ width: 120 }}>
              <Button
                data-testid={ProductInsertTestIdEnum.PRODUCT_BUTTON_INSERT}
                loading={loading}
                disabled={disabledButton}
                onClick={handleInsertProduct}
                type="primary"
              >
                Inserir produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default ProductInsert;
