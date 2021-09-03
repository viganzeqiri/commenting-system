import { Box, Button, Textarea } from "@chakra-ui/react";

export const Form = () => {
  return (
    <Box as="form" textAlign="right" pt="20px">
      <Textarea placeholder="Add a comment" />

      <Button
        mt="10px"
        borderColor="brand.first"
        color="brand.first"
        variant="outline"
      >
        Comment
      </Button>
    </Box>
  );
};
