import axios from "axios";

export default {
  getMultas(id) {
    return axios
      .get(`https://multas-api.onrender.com/api/multas/${id}`)
      .then(({ data }) => {
        return data;
      });
  },
  createMultas(body) {
    return axios
      .post("https://multas-api.onrender.com/api/multas/", body)
      .then(({ data }) => {
        return data;
      });
  },
  getTarifario() {
    return axios
      .get(`https://multas-api.onrender.com/api/tarifario`)
      .then(({ data }) => {
        return data;
      });
  },
};
