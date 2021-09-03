import { Box } from "@chakra-ui/react";
import { Details, Content, Controls, Comments } from "./components";

export const Post = () => {
  return (
    <Box p="20px 0">
      <Details />
      <Content />
      <Controls />
      <Comments />
    </Box>
  );
};
