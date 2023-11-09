/** @format */

import { baseAxios, setToken } from "@/servies";
import { serialize, parse } from "cookie";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  if (req.method === "POST") {
    console.log("req.body", JSON.stringify(req.body, null, 2));
    baseAxios
      .post(`/auth/login`, req.body, { withCredentials: true })
      .then((response) => {
        const options = {
          expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          path: "/",
          // domain: 'http://localhost:3000',
        };
        res.setHeader(
          "Set-Cookie",
          serialize("token", `${response.data.token}`, options)
        );

        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        if (response?.data) {
          res.status(400).json(response?.data);
        } else {
          res.status(500).json({
            message: "Server Side Error",
            status: 500,
          });
        }
      });
  } else if (req.method === "GET") {
    baseAxios
      .get(`/auth/me`, setToken(req))
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        if (response?.data) {
          res.status(400).json(response?.data);
        } else {
          res.status(500).json({
            message: "Server Side Error",
            status: 500,
          });
        }
      });
  } else {
    res.status(405).json({
      message: "Method can not allow",
    });
  }
};
