import axios from "axios";

export default {
  getPlacas(placa) {
    return axios
      .get(`https://multas-api.onrender.com/api/placa/${placa}`)
      .then(({ data }) => {
        return data;
      });
  },
  getLicencia(licencia) {
    return axios
      .get(`https://api.adamix.net/apec/cedula/${licencia}`)
      .then(({ data }) => {
        return data;
      });
  },
};
