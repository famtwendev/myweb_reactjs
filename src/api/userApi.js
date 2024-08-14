import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    // Ko duoc thay doi duong dan nay cua api
    const url = '/auth/local/register';
    return axiosClient.post(url, data);
  },

  login(data) {
    // Ko duoc thay doi duong dan nay cua api
    const url = '/auth/local';
    return axiosClient.post(url, data);
  },
};

export default userApi;
