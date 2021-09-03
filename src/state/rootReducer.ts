import { combineReducers } from "redux";

import commentsReducer from "state/comments/reducer";
import repliesReducer from "state/replies/reducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  replies: repliesReducer,
});

export default rootReducer;
