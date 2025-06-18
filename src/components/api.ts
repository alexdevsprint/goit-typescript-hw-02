//API unsplash.com
import axios from "axios";

import { ApiResponse } from "../types";

const API_KEY = "4QMrl8guwtes6LXxWeXN_wpyU-wBACS3-duCqs7NG78";



export const fetchData = async (query:string, page = 1, per_page = 12):Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>("https://api.unsplash.com/search/photos", {
    params: {
      client_id: API_KEY,
      query: query,
      page,
      per_page,
    },
  });

  return response.data;
};
