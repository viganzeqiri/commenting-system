import { render } from "../../../../test-utils";
import { initialComment } from "../form/Form";
import { Comments } from "./Comments";

describe("Test Comments", () => {
  it("should list all comments", () => {
    const { queryAllByTestId } = render(
      <Comments comments={[{ ...initialComment }]} />
    );

    expect(queryAllByTestId("comment")).not.toHaveLength(2);
    expect(queryAllByTestId("comment")).toHaveLength(1);
  });
});
