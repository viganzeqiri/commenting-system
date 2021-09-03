import { createSelector } from "reselect";
import { RootState } from "state";

const getRepliesState = (state: RootState) => state.replies;
const getIds = (_: RootState, ids: string[]) => ids;

export const getRepliesByIds = createSelector(
  getRepliesState,
  getIds,
  (replies, ids) => {
    return ids.map((id) => replies.byId[id]);
  }
);
