import reducer from "./reducer";

test("should return the initial state", () => {
  // @ts-ignore: Unreachable code error
  expect(reducer(undefined, {})).toEqual({ allIds: [], byId: {} });
});

test("should handle add comment case", () => {
  const date = new Date();
  const previousState = {
    byId: {},
    allIds: [],
  };
  expect(
    reducer(previousState, {
      type: "ADD_COMMENT",
      payload: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: [],
        votes: 10,
      },
    })
  ).toEqual({
    byId: {
      1: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: [],
        votes: 10,
      },
    },
    allIds: ["1"],
  });
});

test("should handle vote comment case", () => {
  const date = new Date();
  const previousState = {
    byId: {
      1: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: [],
        votes: 10,
      },
    },
    allIds: [],
  };
  expect(
    reducer(previousState, {
      type: "VOTE",
      payload: {
        commentId: "1",
        type: "upvote",
      },
    })
  ).toEqual({
    byId: {
      1: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: [],
        votes: 11,
      },
    },
    allIds: [],
  });

  expect(
    reducer(previousState, {
      type: "VOTE",
      payload: {
        commentId: "1",
        type: "downvote",
      },
    })
  ).toEqual({
    byId: {
      1: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: [],
        votes: 9,
      },
    },
    allIds: [],
  });
});

test("should handle reply to comment case", () => {
  const date = new Date();
  const previousState = {
    byId: {
      1: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: [],
        votes: 10,
      },
    },
    allIds: [],
  };

  expect(
    reducer(previousState, {
      type: "REPLY",
      payload: {
        commentId: "1",
        reply: {
          id: "3",
          author: "Vigan",
          content: "Bar",
          createTime: date,
          repliesIds: [],
          votes: 5,
        },
      },
    })
  ).toEqual({
    byId: {
      1: {
        id: "1",
        author: "Vigan",
        content: "Bar",
        createTime: date,
        repliesIds: ["3"],
        votes: 10,
      },
    },
    allIds: [],
  });
});
