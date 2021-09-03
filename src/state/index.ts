import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export interface CommentProps {
  id: string;
  content: string;
  author: string;
  createTime: Date;
  upvotes: number;
  repliesIds: string[];
}
