import { Box } from "@chakra-ui/react";
import { Details, Content, Controls } from "./components";

export const Post = () => {
  return (
    <Box border="1px solid red">
      <Details />
      <Content />
      <Controls />
    </Box>
  );
};
