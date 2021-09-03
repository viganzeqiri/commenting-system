import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

export const Controls = () => {
  return (
    <Box>
      <Flex as="button" alignItems="center" pt="20px">
        <ChatIcon mr="10px" />
        <Text>3 Comments</Text>
      </Flex>

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
    </Box>
  );
};
