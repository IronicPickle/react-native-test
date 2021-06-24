import { CS_API_KEY, OMDB_API_KEY } from "@env";
import axios from "axios";

export default {
  axios: {
    cs: axios.create({
      baseURL: `https://api.currencyscoop.com/v1`,
      params: {
        api_key: CS_API_KEY,
      },
    }),
  },
};
