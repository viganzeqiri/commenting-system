import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "../form/Form";
import { Upvotes } from "../upvotes/Upvotes";

export const Reply = () => {
  const [showReply, setShowReply] = useState(false);

  return (
    <Flex
      direction="column"
      p="20px 20px"
      ml="30px"
      mt="20px"
      borderLeft="1px solid"
      borderColor="brand.first"
      bg="blackAlpha.50"
    >
      <Flex alignItems="center">
        <Text fontSize="sm" mr="5px">
          Vigan Zeqiri
        </Text>
        <Text fontSize="xs">3 days ago</Text>
      </Flex>

      <Text fontSize="xl" mt="10px">
        Reply content
      </Text>

      <Flex alignItems="center" pt="20px">
        <Upvotes />

        <Button
          ml="40px"
          borderColor="brand.first"
          color="brand.first"
          variant="outline"
          onClick={() => setShowReply((prevState) => !prevState)}
        >
          Reply
        </Button>
      </Flex>

      {showReply && <Form useReplyLables />}
    </Flex>
  );
};
