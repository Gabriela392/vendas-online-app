import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../../../modules/login/types/UserType';
import type { NotificationType } from '../../types/NotificationType';

interface GlobalState {
  notification?: NotificationType;
  user?: UserType;
}

const initialState: GlobalState = {
  notification: undefined,
  user: undefined,
};

export const counterSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUserAction } = counterSlice.actions;

export default counterSlice.reducer;
