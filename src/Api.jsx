import axios from "axios";
//create api connect
export const instance = axios.create({
  baseURL: "http://localhost:9000/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
