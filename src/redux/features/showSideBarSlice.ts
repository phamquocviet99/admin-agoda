import { createSlice } from "@reduxjs/toolkit";

export interface ShowSideBar {
  isShow: boolean;
}
const initialState: ShowSideBar = {
  isShow: true,
};

export const ShowSideBarSlice = createSlice({
  name: "showSideBar",
  initialState,
  reducers: {
    setShowSideBar: (state) => {
      state.isShow = !state.isShow;
    },
  },
});
export default ShowSideBarSlice.reducer;
export const { setShowSideBar } = ShowSideBarSlice.actions;
