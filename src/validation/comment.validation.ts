import { object, string } from "zod";

export const commentSchema = object({
  comment: string({ required_error: "Comment is required" }),
});