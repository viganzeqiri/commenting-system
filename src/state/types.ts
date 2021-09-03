import { CommentProps } from "pages/post/components";

export const ADD_COMMENT = "ADD_COMMENT";
export const VOTE = "VOTE";
export const REPLY = "REPLY";

export interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: CommentProps;
}

export interface VoteCommentAction {
  type: typeof VOTE;
  payload: { commentId: string; type: "upvote" | "downvote" };
}

export interface ReplyCommentAction {
  type: typeof REPLY;
  payload: { commentId: string; reply: CommentProps };
}

export type CommentReplyActionTypes =
  | AddCommentAction
  | VoteCommentAction
  | ReplyCommentAction;

export type AppActions = CommentReplyActionTypes;
