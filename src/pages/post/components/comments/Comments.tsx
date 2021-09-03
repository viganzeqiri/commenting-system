import { Box, Text } from "@chakra-ui/react";
import { CommentProps } from "../comment/Comment";
import { Comment } from "../index";

interface CommentsProps {
  comments: CommentProps[];
}

export const Comments: React.FC<CommentsProps> = ({ comments }) => {
  if (!comments.length) {
    return null;
  }

  return (
    <Box
      border="1px solid"
      borderColor="brand.second"
      borderRadius="7px"
      p="20px 20px 20px"
      m="40px 0"
    >
      <Text mb="20px">Comments</Text>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Box>
  );
};
