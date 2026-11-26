import { useEffect, useState } from 'react';
import { URL_USER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useUserReducer } from '../../../store/reducers/userReducer/useUserReducer';

export const useUser = () => {
  const { users, setUsers } = useUserReducer();
  const { request, loading } = useRequests();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    request(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, [request, setUsers]);

  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();
  const usersFiltered = users.filter((user) =>
    [user.name, user.email, user.phone, user.cpf].some((value) =>
      value?.toLocaleLowerCase().includes(normalizedSearchTerm),
    ),
  );

  const handleOnChangeSearch = (value: string) => {
    setSearchTerm(value);
  };

  return {
    users: usersFiltered,
    loading,
    handleOnChangeSearch,
  };
};
