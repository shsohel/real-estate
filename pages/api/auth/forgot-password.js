/**
 * eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

import { baseAxios } from "@/servies";

export default (req, res) => {
  if (req.method === "POST") {
    baseAxios
      .post(`/auth/forgot-password`, {
        ...req.body,
        clientUrl: req.headers.origin,
      })
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
  } else if (req.method === "PUT") {
    baseAxios
      .put(`/auth/reset-password/${req.body.token}`, req.body)
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
