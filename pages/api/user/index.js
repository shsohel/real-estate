/** @format */

import { baseAxios, setToken } from "@/servies";
import { convertQueryString } from "@/utils/utolity";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  if (req.method === "POST") {
    baseAxios
      // .get(`/users?${convertQueryString(req.query)}`, req.body, setToken(req))
      .get(`/users`, setToken(req))
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          res.status(401).json(response?.data);
        } else if (response?.data) {
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
