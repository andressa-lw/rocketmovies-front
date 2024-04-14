import axios from "axios"

export const api = axios.create({
  baseURL: "https://explorer-rocketmovies-api.onrender.com",
})
