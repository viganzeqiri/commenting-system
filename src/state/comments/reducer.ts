import { CommentProps } from "pages/post/components";
import { CommentReplyActionTypes, ADD_COMMENT, VOTE, REPLY } from "state/types";

interface State {
  byId: Record<string, CommentProps>;
  allIds: string[];
}

export const initialState = {
  byId: {},
  allIds: [],
};

const commentsReducer = (
  state: State = initialState,
  action: CommentReplyActionTypes
) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const newComment = action.payload;

      return {
        ...state,
        byId: {
          ...state.byId,
          [newComment.id]: newComment,
        },
        allIds: state.allIds.concat(newComment.id),
      };
    }

    case VOTE: {
      const { commentId, type } = action.payload;
      const parentComment = state.byId[commentId];

      if (!parentComment)
        return {
          ...state,
        };

      return {
        ...state,
        byId: {
          ...state.byId,
          [commentId]: {
            ...parentComment,
            votes: parentComment.votes + (type === "upvote" ? 1 : -1),
          },
        },
      };
    }

    case REPLY: {
      const { commentId, reply } = action.payload;
      const parentComment = state.byId[commentId];

      if (!parentComment)
        return {
          ...state,
        };

      return {
        ...state,
        byId: {
          ...state.byId,
          [commentId]: {
            ...parentComment,
            repliesIds: parentComment.repliesIds.concat(reply.id),
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default commentsReducer;
