import { API_BASE_URL } from "@env"
import axios from "axios"
// import API_BASE_URL from "react-native-dotenv"

const api = axios.create({
  baseURL: `http://${API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
