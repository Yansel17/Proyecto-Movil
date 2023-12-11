import axios from "axios";

export default {
  getPlacas(placa) {
    return axios
      .get(`https://multas-api.onrender.com/api/placa/${placa}`)
      .then(({ data }) => {
        return data;
      });
  },
};
