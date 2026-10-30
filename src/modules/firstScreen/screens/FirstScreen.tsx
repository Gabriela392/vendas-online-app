import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginRouteEnum } from '../../login/routes'
import { ProductRoutesEnum } from '../../products/routes'; 
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      navigate(ProductRoutesEnum.PRODUCT);
    } else {
      navigate(LoginRouteEnum.LOGIN);
    }
  }, []);

  return <Spin />;
};

export default FirstScreen;