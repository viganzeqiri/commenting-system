import { FormEvent, KeyboardEvent, useCallback, useRef, useState } from "react";
import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "state";
import { repliesSelectors } from "state/selectors";
import { replyComment, voteComment } from "state/actions";
import { Controls } from "../controls/Controls";
import { Form } from "../form/Form";
import { Votes } from "../votes/Votes";

export interface CommentProps {
  id: string;
  content: string;
  author: string;
  createTime: Date;
  votes: number;
  repliesIds: string[];
}

export const Comment: React.FC<CommentProps> = ({
  id,
  content,
  author,
  createTime,
  votes,
  repliesIds,
}) => {
  const formRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const dispatch = useAppDispatch();
  const [showReplies, setShowReplies] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const replies = useAppSelector((state) =>
    repliesSelectors.getRepliesByIds(state, repliesIds)
  );

  const handleCommentAdd = useCallback(
    (
      event: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>,
      reply: CommentProps
    ) => {
      event.preventDefault();
      dispatch(replyComment({ commentId: id, reply }));
      setShowReplies(true);
      setShowForm(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFirstIconClick = () => setShowReplies((prevState) => !prevState);

  const handleSecondIconClick = () => {
    setShowForm(true);
    formRef?.current?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    formRef?.current?.focus();
  };

  const handleVote = useCallback((type: "upvote" | "downvote") => {
    dispatch(voteComment({ commentId: id, type }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      borderBottom="1px solid"
      borderLeft="1px solid"
      borderColor="brand.first"
      p="20px 0 20px 20px"
      mt="20px"
    >
      <Flex alignItems="center">
        <Avatar name={author} size="sm">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Flex alignItems="center" ml="20px">
          <Text mr="5px">Posted by {author}</Text>
          <Text fontSize="14px" opacity="0.6">
            {createTime.getDay()}
          </Text>
        </Flex>
      </Flex>

      <Text fontSize="xl" mt="10px">
        {content}
      </Text>

      <Flex alignItems="center" mt="20px">
        <Controls
          commentsNumber={replies.length}
          useReplyLables
          onFirstIconClick={handleFirstIconClick}
          onSecondIconClick={handleSecondIconClick}
        />
        <Box ml="50px">
          <Votes votes={votes} onChange={handleVote} />
        </Box>
      </Flex>

      {!!repliesIds.length && showReplies && (
        <Box>
          {replies.map((reply) => (
            <Comment key={reply.id} {...reply} />
          ))}
        </Box>
      )}

      <Box>
        {showForm && (
          <Form ref={formRef} useReplyLables onFormSubmit={handleCommentAdd} />
        )}
      </Box>
    </Box>
  );
};
