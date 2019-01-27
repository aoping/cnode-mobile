import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Do something with response data
  return response.data;
}, (error) => {
  // Do something with response error
  return error;
});


export default axios
