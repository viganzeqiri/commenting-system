import { Flex, Text } from "@chakra-ui/react";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";

interface ControlsProps {
  useReplyLables?: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  useReplyLables = false,
}) => {
  return (
    <Flex alignItems="center" pt="20px">
      <Flex as="button" alignItems="center" mr="40px">
        <ChatIcon mr="10px" />
        <Text>3 {useReplyLables ? "Replies" : "Comments"}</Text>
      </Flex>

      <Flex as="button" alignItems="center">
        <AddIcon mr="10px" />
        <Text>Add a {useReplyLables ? "reply" : "comment"}</Text>
      </Flex>
    </Flex>
  );
};
