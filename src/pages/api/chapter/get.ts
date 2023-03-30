import connectMongo from "../../../utils/connectMongo";
import Chapter from "../../../../models/chapterModel";
import type { NextApiRequest, NextApiResponse } from "next";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function getChapters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();

    let data = await Chapter.find().sort({ chapterOrder: 1 });
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
