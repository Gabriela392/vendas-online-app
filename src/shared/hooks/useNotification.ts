import { notification as notificationAntd } from 'antd';
import { useEffect } from 'react';

import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useGlobalReducer();

  useEffect(() => {
    if (notification?.message && notification.type) {
      api[notification.type as 'success' | 'info' | 'warning' | 'error']({
        title: notification.message,
        description: notification.description,
        placement: 'bottomRight',
      });
    }
  }, [api, notification]);

  return {
    api,
    contextHolder,
  };
};
