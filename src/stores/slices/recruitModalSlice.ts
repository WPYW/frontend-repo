import { createSlice } from '@reduxjs/toolkit';

export interface UploadModalState {
  isOpen: boolean;
}

const initialState: UploadModalState = {
  isOpen: false,
};

export const recruitModalSlice = createSlice({
  name: 'recruitModal',
  initialState,
  reducers: {
    recruituploadModalOpen: (state) => {
      state.isOpen = true;
    },
    recruituploadModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { recruituploadModalOpen, recruituploadModalClose } = recruitModalSlice.actions;

export default recruitModalSlice.reducer;
