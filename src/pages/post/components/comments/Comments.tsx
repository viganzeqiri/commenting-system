import { Box, Text } from "@chakra-ui/react";
import { Comment } from "../index";

export const Comments = () => {
  return (
    <Box>
      <Text m="20px 0">Comments</Text>
      <Comment />
      <Comment />
      <Comment />
    </Box>
  );
};
