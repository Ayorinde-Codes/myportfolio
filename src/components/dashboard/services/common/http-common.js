import axios from "axios";
import CONFIG from "../../../../config/config";

export default axios.create({
  
  baseURL: CONFIG.API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  }
});
