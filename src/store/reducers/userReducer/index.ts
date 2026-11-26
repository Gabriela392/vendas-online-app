import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserType } from '../../../modules/login/types/UserType';

interface UserState {
  users: UserType[];
}

const initialState: UserState = {
  users: [],
};

export const counterSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUserAction } = counterSlice.actions;

export default counterSlice.reducer;
