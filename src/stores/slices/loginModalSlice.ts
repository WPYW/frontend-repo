import { createSlice } from '@reduxjs/toolkit';

export interface LoginModalState {
  isOpen: boolean;
}

const initialState: LoginModalState = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    loginModalOpen: (state) => {
      state.isOpen = true;
    },
    loginModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { loginModalOpen, loginModalClose } = loginModalSlice.actions;

export default loginModalSlice.reducer;
