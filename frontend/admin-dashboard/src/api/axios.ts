import axios from "axios";
import { env } from "process";


export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_UR, //for example "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

