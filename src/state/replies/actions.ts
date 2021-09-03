import { CommentProps } from "state";

export type RepliesActions =
  | { type: "add_comment"; payload: CommentProps }
  | { type: "reply"; payload: { parentId: string; reply: CommentProps } }
  | { type: "vote"; payload: { id: string; type: "upvote" | "downvote" } };
