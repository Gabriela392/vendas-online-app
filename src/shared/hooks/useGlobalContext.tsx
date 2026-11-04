import {
  createContext,
  useCallback,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { UserType } from '../../modules/login/types/UserType';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  notification?: NotificationProps;
  user?: UserType;
}
interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: Dispatch<SetStateAction<GlobalData>>;
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};



export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setNotification = useCallback(
    (message: string, type: NotificationType, description?: string) => {
      setGlobalData((currentData) => ({
        ...currentData,
        notification: {
          message,
          type,
          description,
        },
      }));
    },
    [setGlobalData],
  );

  const setUser = useCallback(
    (user: UserType) => {
      setGlobalData((currentData) => ({
        ...currentData,
        user,
      }));
    },
    [setGlobalData],
  );

  return {
    notification: globalData?.notification,
    user: globalData?.user,
    setUser,
    setNotification,
  };
};