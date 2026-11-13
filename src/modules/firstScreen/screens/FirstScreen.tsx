import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductRoutesEnum } from '../../product/productRoutes';
import { useUser } from '../../../store/reducers/globalReducer/useGlobalReducer';

const FirstScreen = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    }
  }, [user]);

  return <Spin />;
};

export default FirstScreen;
