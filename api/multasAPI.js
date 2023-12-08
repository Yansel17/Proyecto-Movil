import axios from "axios";

export default {
  getMultas() {
    return axios
      .get(
        "https://multas-api.onrender.com/api/multas/656d1f27d85a8028342ae4ce"
      )
      .then(({ data }) => data);
  },
};
