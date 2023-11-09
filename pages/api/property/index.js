/** @format */

import { baseAxios, setToken } from "@/servies";

export async function POST(request) {
  console.log(request);
  await baseAxios
    .post(`/properties`, request.body, setToken(request))
    .then((response) => {
      res.status(201).json(response.data);
    })
    .catch(({ response }) => {
      console.log(response.data);
      res.status(400).json(response.data);
    });
}
