/** @format */

import { baseAxios, setToken } from "@/servies";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  console.log(req.body);
  if (req.method === "POST") {
    baseAxios
      .post(`/properties`, req.body, setToken(req))
      .then((response) => {
        res.status(201).json(response.data);
      })
      .catch(({ response }) => {
        console.log(response.data);
        res.status(400).json(response.data);
      });
  }
};
