// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  jsCWD: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log("JS cwd: ", process.cwd());
  res.status(200).json({ jsCWD: process.cwd() });
}
