import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, compose, Store, EmptyObject } from "redux";
import configureMockStore from "redux-mock-store";
import rootReducer from "./rootReducer";

import { State as CommentsState } from "./comments/reducer";
import { State as RepliesState } from "./replies/reducer";
import { CommentReplyActionTypes } from "./types";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
export const mockStore = configureMockStore();
export type StoreType = Store<
  EmptyObject & {
    comments: CommentsState;
    replies: RepliesState;
  },
  CommentReplyActionTypes
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
