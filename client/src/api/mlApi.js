import axios from "axios";
const { REACT_APP_ML_API_URL } = process.env;

export const getProductsByQuery = (query) => {
  const request = {
    method: "GET",
    url: `${REACT_APP_ML_API_URL}/api/items?q=${query}`,
    headers: {
      "content-type": "application/json",
    },
  };
  return axios(request);
};

export const getProductDetailInformation = (id) => {
  const request = {
    method: "GET",
    url: `${REACT_APP_ML_API_URL}/api/items/${id}`,
    headers: {
      "content-type": "application/json",
    },
  };

  return axios(request);
};
