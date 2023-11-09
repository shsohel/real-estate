/**
 * eslint-disable import/no-anonymous-default-export
 *
 * @format
 */

import { baseAxios } from "@/servies";
import cookie, { serialize } from "cookie";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  if (req.method === "GET") {
    // const options = {
    // httpOnly: true,
    //  secure: process.env.NODE_ENV !== 'development',
    // expires: new Date(0),
    //   sameSite: 'strict',
    //  maxAge: 0,
    //  path: '/',
    // domain: 'https://next-e-dashboard.vercel.app',
    ///};
    //  res.setHeader('Set-Cookie', cookie.serialize('token', '', options));

    res.setHeader("Set-Cookie", [
      cookie.serialize("token", "false", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: true,
        maxAge: 0,
        path: "/",
      }),
    ]);
    baseAxios.get("/auth/logout").then((response) => {
      res.status(200).json(response.data);
    });
  } else {
    res.status(405).json({
      message: "Method can not allow",
    });
  }
};
