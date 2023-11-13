/* eslint-disable import/no-anonymous-default-export */

import { baseAxios } from "@/servies";

export default (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    baseAxios
      .delete(`/fileupload/${id}`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        res.status(400).json(response.data);
      });
  } else if (req.method === "GET") {
    const { id } = req.query;
    baseAxios
      .get(`/fileupload/${id}`)
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        res.status(400).json(response.data);
      });
  } else if (req.method === "PUT") {
    const { id } = req.query;
    baseAxios
      .put(`/fileupload/${id}`, req.body)
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
