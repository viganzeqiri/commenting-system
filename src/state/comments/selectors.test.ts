import { getComments, getCommentsIds } from "./selectors";

it("shouold return comments", () => {
  const result = getComments({
    comments: {
      byId: {
        // @ts-ignore: Unreachable code error
        1: { id: "1", name: "bar" },
        // @ts-ignore: Unreachable code error
        2: { id: "1", name: "bar" },
      },
      allIds: ["1", "2"],
    },
  });
  expect(result).toEqual([
    { id: "1", name: "bar" },
    { id: "1", name: "bar" },
  ]);
});

it("shouold return comment ids", () => {
  const result = getCommentsIds({
    comments: {
      byId: {
        // @ts-ignore: Unreachable code error
        1: { id: "1", name: "bar" },
        // @ts-ignore: Unreachable code error
        2: { id: "1", name: "bar" },
      },
      allIds: ["1", "2"],
    },
  });
  expect(result).toEqual(["1", "2"]);
});
