/** @format */

import axios from "axios";
import { parse } from "cookie";

const { API_URL, API_VERSION, CLIENT_URL } = process.env;

const URL = API_URL;
const clientUrl = CLIENT_URL;

export const baseAxios = axios.create({
  baseURL: `${URL}/api/${API_VERSION}`,
  withCredentials: true,
  headers: {
    "secret-key": "secretKey",
    clientUrl,
  },
});

export const setToken = (req) => {
  // console.log(req.headers);
  const { token } = parse(req?.headers?.cookie ?? "");
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      // host: req.headers.origin,
    },
  };
  return header;
};
export const setOrigin = (req) => {
  const header = {
    headers: {
      host: req.headers.host,
    },
  };
  return header;
};
