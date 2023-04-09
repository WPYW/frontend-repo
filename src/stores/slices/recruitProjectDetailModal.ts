import { createSlice } from '@reduxjs/toolkit';

export interface RecruitProjectDetailModalState {
  isOpen: boolean;
}

const initialState: RecruitProjectDetailModalState = {
  isOpen: false,
};

export const recruitProjectDetailModalSlice = createSlice({
  name: 'recruitProjectDeatilModal',
  initialState,
  reducers: {
    recruitProjectDetailModalOpen: (state) => {
      state.isOpen = true;
    },
    recruitProjectDeatilModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  recruitProjectDetailModalOpen: recruitProjectDetailModalOpen,
  recruitProjectDeatilModalClose: recruitProjectDetailModalClose,
} = recruitProjectDetailModalSlice.actions;

export default recruitProjectDetailModalSlice.reducer;
