import { forwardRef } from "react";
import { Box, Button, Textarea } from "@chakra-ui/react";

type Ref = HTMLTextAreaElement;
interface FormProps {
  useReplyLables?: boolean;
}

export const Form = forwardRef<Ref, FormProps>((props, ref) => {
  const { useReplyLables } = props;

  return (
    <Box as="form" textAlign="right" pt="20px">
      <Textarea
        ref={ref}
        bg="brand.third"
        placeholder={useReplyLables ? "Add a reply" : "Add a comment"}
      />

      <Button
        mt="10px"
        borderColor="brand.first"
        color="brand.first"
        variant="outline"
        {...(useReplyLables && {
          size: "sm",
        })}
      >
        Comment
      </Button>
    </Box>
  );
});
