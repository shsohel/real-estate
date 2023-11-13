/** @format */

import { baseAxios } from "@/servies";

export default (req, res) => {
  if (req.method === "POST") {
    baseAxios
      .post(`/users`, req.body, setToken(req))
      .then((response) => {
        res.status(201).json(response.data);
      })
      .catch(({ response }) => {
        console.log(response.data);
        res.status(400).json(response.data);
      });
  }
};
