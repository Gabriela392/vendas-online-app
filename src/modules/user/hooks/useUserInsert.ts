import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { UserRoutesEnum } from '../routes';
import type { InsertUser } from '../../../shared/dtos/InsertUser.dto';

export const useUserInsert = () => {
  const navigate = useNavigate();
  const { request, loading } = useRequests();
  const [user, setUser] = useState<InsertUser>({
    cpf: '',
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  const disabledButton =
    !user.cpf || !user.email || !user.name || !user.password || !user.phone;

  const handleOnChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setUser((currentUser) => ({
      ...currentUser,
      [name]: event.target.value,
    }));
  };

  const handleCancelInsert = () => {
    navigate(UserRoutesEnum.USER);
  };

  const handleInsertAdmin = async () => {
    const result = await request(URL_USER, MethodsEnum.POST, undefined, user);
    if (result) {
      navigate(UserRoutesEnum.USER);
    }
  };

  return {
    user,
    disabledButton,
    loading,
    handleCancelInsert,
    handleInsertAdmin,
    handleOnChangeInput,
  };
};
