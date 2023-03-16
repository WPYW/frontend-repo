import { createSlice } from '@reduxjs/toolkit';

export interface UploadModalState {
  isOpen: boolean;
}

const initialState: UploadModalState = {
  isOpen: false,
};

export const uploadModalSlice = createSlice({
  name: 'uploadModal',
  initialState,
  reducers: {
    uploadModalOpen: (state) => {
      state.isOpen = true;
    },
    uploadModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { uploadModalOpen, uploadModalClose } = uploadModalSlice.actions;

export default uploadModalSlice.reducer;
