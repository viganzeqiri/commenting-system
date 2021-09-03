import { Box, Text } from "@chakra-ui/react";
import { Comment } from "../index";

export const Comments = () => {
  return (
    <Box
      border="1px solid"
      borderColor="brand.second"
      borderRadius="7px"
      p="20px 20px 40px"
      m="40px 0"
    >
      <Text mb="20px">Comments</Text>
      <Comment />
    </Box>
  );
};
