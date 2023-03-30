import connectMongo from "../../../utils/connectMongo";
import Chapter from "../../../../models/chapterModel";
import type { NextApiRequest, NextApiResponse } from "next";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function updateChapters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectMongo();

    const { chapterID, lessonID, isComplete } = req.body;

    try {
      await Chapter.updateOne(
        {
          _id: chapterID,
          "lessons._id": lessonID,
        },
        {
          $set: {
            "lessons.$.isComplete": isComplete,
          },
        }
      );

      res.send("success");
    } catch (error) {
      res.send("error");
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
