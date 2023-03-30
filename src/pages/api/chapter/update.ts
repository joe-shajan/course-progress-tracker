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
    console.log("creating document");

    // for (let chapter of chaptersArray) {
    //   await Chapter.create(chapter);
    // }
    console.log("CREATED DOCUMENT");

    res.send("success");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

// Course.updateOne(
//     {
//       title: 'Epic React',
//       'lessons.lessonTitle': 'Welcome to Epic React',
//     },
//     {
//       $set: {
//         'lessons.$.isComplete': true,
//       },
//     }
//   )
//     .then(() => console.log('Update successful'))
//     .catch((err) => console.error(err));
