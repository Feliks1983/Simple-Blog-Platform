import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userUpdate(state, action) {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    loadUser(state, action) {
      state.userInfo = action.payload;
    },
    logout(state) {
      state.userInfo = null;
    },
  },
});

export const loadStory = () => {
  return (dispatch) => {
    const userInfo = JSON.parse(localStorage.getItem("userUpdate"));
    if (userInfo) {
      dispatch(loadUser(userInfo));
    }
  };
};
//localStorage.clear();
export const { userUpdate, loadUser, logout } = userSlice.actions;
export default userSlice.reducer;
