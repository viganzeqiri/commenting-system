import { render, fireEvent, screen } from "../../test-utils";
import { Post } from "./Post";

describe("Test Post", () => {
  it("should add a new comment", () => {
    const { getByTestId, getByText } = render(<Post />);

    const textarea = getByTestId("textarea");
    const button = getByText("Comment");

    fireEvent.change(textarea, { target: { value: "Hi Vigan" } });
    fireEvent.click(button);

    expect(screen.getByTestId("comment")).toBeInTheDocument();
  });

  it("should vote comment", () => {
    const { getByTestId, getByText } = render(<Post />);

    const textarea = getByTestId("textarea");
    const button = getByText("Comment");

    // add a comment first
    fireEvent.change(textarea, { target: { value: "Hi Vigan" } });
    fireEvent.click(button);

    expect(screen.getByTestId("result").textContent).toEqual("0");

    fireEvent.click(getByTestId("upvote"));

    expect(screen.getByTestId("result").textContent).toEqual("1");

    fireEvent.click(getByTestId("downvote"));

    expect(screen.getByTestId("result").textContent).toEqual("0");
  });
});
