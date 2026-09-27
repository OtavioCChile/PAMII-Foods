import axios from "axios";

// 👉 Troque para a sua URL do MockAPI:
export const MOCKAPI_BASE = "mock";

// Cliente Axios para MockAPI (comidas)
export const foodsHttp = axios.create({
  baseURL: MOCKAPI_BASE,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Cliente Axios para ReqRes (login)
export const authHttp = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 10000,
  headers: {
    "x-api-key": "reqres-free-v1",
    "Content-Type": "application/json",
  },
});
