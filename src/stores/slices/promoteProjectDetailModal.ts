import { createSlice } from '@reduxjs/toolkit';

export interface PromoteProjectDetailModalState {
  isOpen: boolean;
}

const initialState: PromoteProjectDetailModalState = {
  isOpen: false,
};

export const promoteProjectDetailModalSlice = createSlice({
  name: 'promoteProjectDetailModal',
  initialState,
  reducers: {
    promoteProjectDetailModalOpen: (state) => {
      state.isOpen = true;
    },
    promoteProjectDetailModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { promoteProjectDetailModalOpen, promoteProjectDetailModalClose } =
  promoteProjectDetailModalSlice.actions;

export default promoteProjectDetailModalSlice.reducer;
