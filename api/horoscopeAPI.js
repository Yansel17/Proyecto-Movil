import axios from "axios";

export default {
  getHoros(data) {
    return axios
      .get(
        `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${data.sign}&day=${data.day}`
      )
      .then(({ data }) => {
        return data;
      });
  },
};
