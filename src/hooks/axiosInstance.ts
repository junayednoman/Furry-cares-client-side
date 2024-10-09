import envConfig from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.base_url,
});

export default axiosInstance;