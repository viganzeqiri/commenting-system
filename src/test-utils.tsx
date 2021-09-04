import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "state/rootReducer";
import { ReactElement } from "react";

function render(
  ui: ReactElement,
  {
    // @ts-ignore: Unreachable code error
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
