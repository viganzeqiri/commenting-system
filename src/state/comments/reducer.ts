import { CommentProps } from "state";
import { CommentsActions } from "./actions";

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
  action: CommentsActions
) => {
  switch (action.type) {
    case "add_comment": {
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
    case "vote": {
      const { id, type } = action.payload;
      const comment = state.byId[id];

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...comment,
            upvotes: comment.upvotes + (type === "upvote" ? 1 : -1),
          },
        },
      };
    }
    case "reply": {
      const { parentId, reply } = action.payload;
      const parentComment = state.byId[parentId];

      if (!parentComment)
        return {
          ...state,
        };

      return {
        ...state,
        byId: {
          ...state.byId,
          [parentId]: {
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
