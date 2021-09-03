import { createSelector } from "reselect";
import { RootState } from "state";

const getCommentsState = (state: RootState) => state.comments;

export const getCommentsIds = createSelector(
  [getCommentsState],
  (comments) => comments.allIds
);

export const getComments = createSelector(
  [getCommentsState, getCommentsIds],
  (state, ids) => ids.map((id) => state.byId[id])
);
