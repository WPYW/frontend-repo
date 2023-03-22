import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    recruitModalOpen: (state) => {
      state.isOpen = true;
    },
    recruitModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { recruitModalOpen, recruitModalClose } = modalSlice.actions;

export default modalSlice.reducer;
