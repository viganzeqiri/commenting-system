import { CommentProps } from "pages/post/components";
import { CommentReplyActionTypes, REPLY, VOTE } from "state/types";

export interface State {
  byId: Record<string, CommentProps>;
  allIds: string[];
}

export const initialState = {
  byId: {},
  allIds: [],
};

const repliesReducer = (
  state: State = initialState,
  action: CommentReplyActionTypes
) => {
  switch (action.type) {
    case REPLY: {
      const { commentId, reply } = action.payload;
      const parentReply = state.byId[commentId];

      if (!parentReply) {
        return {
          ...state,
          byId: {
            ...state.byId,
            [reply.id]: reply,
          },
          allIds: state.allIds.concat(reply.id),
        };
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [commentId]: {
            ...parentReply,
            repliesIds: parentReply.repliesIds.concat(reply.id),
          },
          [reply.id]: reply,
        },
        allIds: state.allIds.concat(reply.id),
      };
    }

    case VOTE: {
      const { commentId, type } = action.payload;
      const parentReply = state.byId[commentId];

      if (!parentReply) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        byId: {
          ...state.byId,
          [commentId]: {
            ...parentReply,
            votes: parentReply.votes + (type === "upvote" ? 1 : -1),
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default repliesReducer;
