import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    console.log("Unexpected error occured");
  }

  return Promise.reject(error);
});

const instance = axios.create({ headers: { source: "web" } });

export default instance;
