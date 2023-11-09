/** @format */

import { baseAxios } from "@/servies";

export default (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    baseAxios
      .delete(`/users/${id}`, setToken(req))
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        res.status(400).json(response.data);
      });
  } else if (req.method === "GET") {
    const { id } = req.query;
    baseAxios
      .get(`/users/${id}`, setToken(req))
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        res.status(400).json(response.data);
      });
  } else if (req.method === "PUT") {
    const { id } = req.query;
    console.log("id", id);
    baseAxios
      .put(`/users/${id}`, req.body, setToken(req))
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        res.status(400).json(response.data);
      });
  } else if (req.method === "PATCH") {
    const { id } = req.query;
    baseAxios
      .put(`/users/update-user-password/${id}`, req.body, setToken(req))
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        res.status(400).json(response.data);
      });
  } else {
    console.log(req.method);
    res.status(405).json({
      message: "Method can not allow",
    });
  }
};
