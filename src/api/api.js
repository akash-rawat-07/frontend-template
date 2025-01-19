import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorization");


    if (token) {
      config.headers.Authorization = token;
    }

    // const cookie = `jwt=${token}`;
    // config.headers.Cookie = cookie;


    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;

  },
  (error) => {
    return Promise.reject(error);
  }
);

const makeRequest = async (url, method, data) => {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    console.log("error: ", error)
    throw error?.response?.data ?? "Something went wrong"
  }
};

export { api, makeRequest };
