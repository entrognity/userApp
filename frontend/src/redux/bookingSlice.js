// redux/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {} // Holds form data for each service
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    saveFormProgress: (state, action) => {
      const { serviceId, formData } = action.payload;
      state.formData[serviceId] = formData;
    },
    submitForm: (state, action) => {
      const { serviceId, formData } = action.payload;
      state.formData[serviceId] = formData;
      // You can handle submission logic here (e.g., send to API)
    },
    resetForm: (state, action) => {
      const { serviceId } = action.payload;
      state.formData[serviceId] = {};
    }
  }
});

export const { saveFormProgress, submitForm, resetForm } = bookingSlice.actions;
export default bookingSlice.reducer;
