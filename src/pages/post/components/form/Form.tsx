import { useState, forwardRef, FormEvent, KeyboardEvent } from "react";
import * as uuid from "uuid";
import { Box, Button, Textarea } from "@chakra-ui/react";
import { CommentProps } from "../comment/Comment";

type Ref = HTMLTextAreaElement;
interface FormProps {
  useReplyLables?: boolean;
  onFormSubmit?: (
    event: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>,
    comment: CommentProps
  ) => void;
}

export const initialComment = {
  id: "",
  content: "",
  author: "Vigan Zeqiri",
  createTime: new Date(),
  votes: 0,
  repliesIds: [],
};

export const Form = forwardRef<Ref, FormProps>((props, ref) => {
  const { useReplyLables, onFormSubmit } = props;
  const [comment, setComment] = useState<CommentProps>(initialComment);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    onFormSubmit?.(event, comment);
    setComment(initialComment);
  };

  return (
    <form onSubmit={onSubmit} data-testid="form">
      <Box textAlign="right" pt="20px">
        <Textarea
          ref={ref}
          bg="brand.third"
          data-testid="textarea"
          placeholder={useReplyLables ? "Add a reply" : "Add a comment"}
          value={comment.content}
          onKeyPress={(event) => {
            if (event.which === 13 && !event.shiftKey) {
              event.preventDefault();

              onFormSubmit?.(event, comment);
              setComment(initialComment);
            }
          }}
          onChange={(event) =>
            setComment((prevState) => ({
              ...prevState,
              id: uuid.v4(),
              content: event.target.value,
              createTime: new Date(),
            }))
          }
        />

        <Button
          mt="20px"
          borderColor="brand.first"
          color="brand.first"
          variant="outline"
          type="submit"
          disabled={!comment.content}
          {...(useReplyLables && {
            size: "sm",
          })}
        >
          {useReplyLables ? "Reply" : "Comment"}
        </Button>
      </Box>
    </form>
  );
});
