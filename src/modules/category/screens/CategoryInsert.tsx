import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screen/Screen';
import { CategoryRoutesEnum } from '../routes';
import { useInsertCategory } from '../hooks/useInsertCategory';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyRight,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import Input from '../../../shared/components/inputs/input';

const CategoryInsert = () => {
  const { name, loading, handleOnChange, disabledButton, insertCategory } = useInsertCategory();
  const navigate = useNavigate();

  const handleOnClickCancel = () => {
    navigate(CategoryRoutesEnum.CATEGORY);
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'CATEGORIAS',
          navigateTo: CategoryRoutesEnum.CATEGORY,
        },
        {
          name: 'INSERIR CATEGORIA',
        },
      ]}
    >
      <DisplayFlexJustifyCenter>
        <LimitedContainer width={400}>
          <Input
            onChange={handleOnChange}
            value={name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button onClick={handleOnClickCancel} danger>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={160}>
              <Button
                disabled={disabledButton}
                loading={loading}
                onClick={insertCategory}
                type="primary"
              >
                Inserir categoria
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default CategoryInsert;
