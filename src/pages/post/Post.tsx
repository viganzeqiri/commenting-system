import { useState, useRef, useCallback, KeyboardEvent } from "react";
import { Box } from "@chakra-ui/react";
import {
  Content,
  Controls,
  Comments,
  Details,
  Form,
  CommentProps,
} from "./components";
import { useAppDispatch, useAppSelector } from "state";
import { commentsSelectors } from "state/selectors";
import { addComment } from "state/actions";

export const Post = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector(commentsSelectors.getComments);
  const formRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [showComments, setShowComments] = useState(false);

  const handleFormSubmit = useCallback(
    (
      event:
        | React.FormEvent<HTMLFormElement>
        | KeyboardEvent<HTMLTextAreaElement>,
      comment: CommentProps
    ) => {
      event.preventDefault();
      dispatch(addComment(comment));
      setShowComments(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFirstIconClick = () =>
    setShowComments((prevState) => !!comments.length && !prevState);

  const handleSecondIconClick = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    formRef.current.focus();
  };

  return (
    <Box p="20px 0">
      <Details />
      <Content />
      <Box mt="10">
        <Controls
          hideAddButton={!showComments || !comments.length}
          commentsNumber={comments.length}
          onFirstIconClick={handleFirstIconClick}
          onSecondIconClick={handleSecondIconClick}
        />
      </Box>

      {showComments && <Comments comments={comments} />}
      <Form ref={formRef} onFormSubmit={handleFormSubmit} />
    </Box>
  );
};
