import { useState } from 'react';
import { Select as AntdSelect, Radio, Upload, Image } from 'antd';
import { UploadOutlined, LinkOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyRight } from '../../../shared/components/styles/display.style';
import { ProductRoutesEnum } from '../productRoutes';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { useCategory } from '../../category/hooks/useCategory';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';

const ProductInsert = () => {
  const [imageType, setImageType] = useState<'url' | 'file'>('url');
  const {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
    handleUploadFile,
    handleRemoveImage,
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
      <DisplayFlexJustifyRight>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChangeInput(event, 'name')}
            value={product.name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />

          <div style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 8, fontWeight: 500 }}>Imagem do Produto</div>
            <Radio.Group
              value={imageType}
              onChange={(e) => setImageType(e.target.value)}
              style={{ marginBottom: 12 }}
            >
              <Radio.Button value="url">
                <LinkOutlined style={{ marginRight: 6 }} /> URL da imagem
              </Radio.Button>
              <Radio.Button value="file">
                <UploadOutlined style={{ marginRight: 6 }} /> Arquivo de foto
              </Radio.Button>
            </Radio.Group>

            {imageType === 'url' ? (
              <Input
                onChange={(event) => onChangeInput(event, 'image')}
                value={product.image.startsWith('data:') ? '' : product.image}
                margin="0px 0px 8px 0px"
                placeholder="https://exemplo.com/foto.jpg"
              />
            ) : (
              <div style={{ marginBottom: 8 }}>
                <Upload
                  accept="image/*"
                  showUploadList={false}
                  beforeUpload={(file) => {
                    handleUploadFile(file);
                    return false;
                  }}
                >
                  <Button icon={<UploadOutlined />}>
                    {product.image.startsWith('data:') ? 'Trocar arquivo de foto' : 'Escolher foto do computador'}
                  </Button>
                </Upload>
              </div>
            )}

            {product.image && (
              <div
                style={{
                  marginTop: 12,
                  padding: 8,
                  border: '1px dashed #d9d9d9',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#fafafa',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Image
                    src={product.image}
                    alt="Pré-visualização"
                    width={56}
                    height={56}
                    style={{ objectFit: 'cover', borderRadius: 4 }}
                  />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>Pré-visualização</div>
                    <div style={{ fontSize: 11, color: '#888' }}>
                      {product.image.startsWith('data:') ? 'Foto carregada do arquivo' : 'Imagem via URL'}
                    </div>
                  </div>
                </div>
                <Button
                  danger
                  size="small"
                  onClick={handleRemoveImage}
                  icon={<DeleteOutlined />}
                >
                  Remover
                </Button>
              </div>
            )}
          </div>

          <InputMoney
            onChange={(event) => onChangeInput(event, 'price', true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <div style={{ marginBottom: 32 }}>
            <div style={{ marginBottom: 8 }}>Categoria</div>
            <AntdSelect
              style={{ width: '100%' }}
              onChange={(value) => handleChangeSelect(String(value))}
              options={categories.map((category) => ({
                value: `${category.id}`,
                label: category.name,
              }))}
            />
          </div>
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button
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
      </DisplayFlexJustifyRight>
    </Screen>
  );
};

export default ProductInsert;
