import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonStateProps {
  auth: boolean;
  sidebar: boolean;
}

const initialState: CommonStateProps = {
  auth: false,
  sidebar: false,
};

const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.auth = action.payload;
    },
  },
});

export const { setAuth } = CommonSlice.actions;
export default CommonSlice.reducer;
