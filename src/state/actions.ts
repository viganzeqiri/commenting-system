import { CommentProps } from "pages/post/components";
import { ADD_COMMENT, VOTE, AppActions } from "./types";

export const addComment = (comment: CommentProps): AppActions => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const voteComment = ({
  commentId,
  type,
}: {
  commentId: string;
  type: "upvote" | "downvote";
}): AppActions => ({
  type: VOTE,
  payload: { commentId, type },
});

export const replyComment = ({
  commentId,
  reply,
}: {
  commentId: string;
  reply: CommentProps;
}): AppActions => ({
  type: "REPLY",
  payload: { commentId, reply },
});
