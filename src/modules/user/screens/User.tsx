import { Spin, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Input from '../../../shared/components/inputs/input';
import {
  DisplayFlexJustifyCenter,
  DisplayFlexJustifyBetween,
} from '../../../shared/components/styles/display.style';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { LimitedContainer } from '../../login/styles/loginScreen.styles';
import type { UserType } from '../../login/types/UserType';
import { useUser } from '../hooks/useUser';
import Screen from '../../../shared/components/screen/Screen';
import { useMemo } from 'react';
import { getUserInfoByToken } from '../../../shared/functions/connection/auth';
import { UserTypeEnum } from '../../../shared/enums/userType.enum';

const { Search } = Input;

const columns: ColumnsType<UserType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{insertMaskInPhone(text)}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render: (text) => <a>{insertMaskInCpf(text)}</a>,
  },
];

const User = () => {
  const { users, loading, handleOnChangeSearch } = useUser();

  const userToken = useMemo(() => getUserInfoByToken(), []);

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'USUÁRIOS',
        },
      ]}
    >
      {loading ? (
        <DisplayFlexJustifyCenter>
          <Spin size="large" />
        </DisplayFlexJustifyCenter>
      ) : (
        <>
          <DisplayFlexJustifyBetween margin="0px 0px 16px 0px">
            <LimitedContainer style={{ width: 240 }}>
              <Search
                placeholder="Buscar usuário"
                onSearch={handleOnChangeSearch}
                enterButton
              />
            </LimitedContainer>
            <LimitedContainer style={{ width: 180 }}>
              {(userToken?.typeUser === UserTypeEnum.Root ||
                userToken?.typeUser === UserTypeEnum.Admin) && (
                <Button type="primary" onClick={() => null}>
                  Inserir Admin
                </Button>
              )}
            </LimitedContainer>
          </DisplayFlexJustifyBetween>
          <Table columns={columns} dataSource={users} />
        </>
      )}
    </Screen>
  );
};

export default User;
