import axios from "axios";

export default {
  getMultas(id) {
    return axios
      .get(`https://multas-api.onrender.com/api/multas/${id}`)
      .then(({ data }) => {
        return data;
      });
  },
};
