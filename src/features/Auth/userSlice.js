import userApi from 'api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constant/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await userApi.register(payload);
  // call API to register

  // save data to local storage
  localStorage.getItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); //JSON.stringify do user laf 1 object

  // return user data
  return { name: 'Famtwen ' };
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await userApi.login(payload);
  // call API to register

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user)); //JSON.stringify do user laf 1 object

  // return user data
  return { name: 'Famtwen ' };
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // Thong tin cua login user
    // Set thonh tin vao redux state, Khởi tạo redux state từ localStorage
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        // update payload vao state hiện tại
        state.current = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        // Update state with the logged-in user payload
        state.current = action.payload;
      });
  },
  // extraReducers: {
  //   [register.fulfilled]: (state, action) => {
  //     state.current = action.payload;
  //   },
  // },
});

const { reducer } = userSlice;
export default reducer;
