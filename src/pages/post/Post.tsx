import { useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Content, Controls, Comments, Details, Form } from "./components";

export const Post = () => {
  const formRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [showComments, setShowComments] = useState(false);

  return (
    <Box p="20px 0">
      <Details />
      <Content />
      <Controls
        onFirstIconClick={() => setShowComments((prevState) => !prevState)}
        onSecondIconClick={() => {
          formRef.current.scrollIntoView({
            behavior: "smooth",
          });

          formRef.current.focus();
        }}
      />
      {showComments && <Comments />}
      <Form ref={formRef} />
    </Box>
  );
};
