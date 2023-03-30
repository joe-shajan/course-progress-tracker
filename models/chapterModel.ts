import { Schema, model, models } from "mongoose";

const chapterSchema = new Schema({
  chapter: {
    type: String,
    required: true,
  },
  chapterOrder: {
    type: Number,
    required: true,
  },
  lessons: [
    {
      lessonTitle: {
        type: String,
        required: true,
      },
      isComplete: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const course = models.chapter || model("chapter", chapterSchema);

export default course;
