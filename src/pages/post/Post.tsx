import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Content, Controls, Comments, Details, Form } from "./components";

export const Post = () => {
  const [showComments] = useState(true);

  return (
    <Box p="20px 0">
      <Details />
      <Content />
      <Controls />
      {showComments && <Comments />}
      <Form />
    </Box>
  );
};
