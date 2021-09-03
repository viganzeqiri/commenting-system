import { CommentProps } from "state";

export type CommentsActions =
  | { type: "add_comment"; payload: CommentProps }
  | { type: "vote"; payload: { id: string; type: "upvote" | "downvote" } }
  | { type: "reply"; payload: { parentId: string; reply: CommentProps } };
