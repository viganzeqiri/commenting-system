import { CommentProps } from "state";
import { RepliesActions } from "./actions";

interface State {
  byId: Record<string, CommentProps>;
  allIds: string[];
}

export const initialState = {
  byId: {},
  allIds: [],
};

const repliesReducer = (
  state: State = initialState,
  action: RepliesActions
) => {
  switch (action.type) {
    case "reply": {
      const { parentId, reply } = action.payload;

      const parent = state.byId[parentId];

      if (!parent) {
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
          [parentId]: {
            ...parent,
            repliesIds: parent.repliesIds.concat(reply.id),
          },
          [reply.id]: reply,
        },
        allIds: state.allIds.concat(reply.id),
      };
    }
    default: {
      return state;
    }
  }
};

export default repliesReducer;
