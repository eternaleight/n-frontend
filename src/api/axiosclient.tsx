import axios from "axios"

const BASE_URL = "http://localhost:5001/api/v1"

const axiosClient = axios.create({
  baseURL: BASE_URL,
})
const getToken = () => localStorage.getItem("token")
//APIを叩く前に前処理を行う
axiosClient.interceptors.request.use(async (config) => {
  return {
    config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`, //リクエストヘッダにJWTを付けてサーバーに渡す
    },
  }
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    throw err.response
  }
)

export default axiosClient
