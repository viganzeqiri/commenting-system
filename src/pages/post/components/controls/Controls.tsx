import { Box, Flex, Text } from "@chakra-ui/react";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";
import { Reply } from "../reply/Reply";

interface ControlsProps {
  useReplyLables?: boolean;
  onFirstIconClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onSecondIconClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Controls: React.FC<ControlsProps> = ({
  useReplyLables = false,
  onFirstIconClick,
  onSecondIconClick,
}) => {
  return (
    <>
      <Flex alignItems="center" pt="20px">
        <Flex
          as="button"
          alignItems="center"
          mr="40px"
          onClick={onFirstIconClick}
        >
          <ChatIcon mr="10px" />
          <Text>3 {useReplyLables ? "Replies" : "Comments"}</Text>
        </Flex>

        <Flex as="button" alignItems="center" onClick={onSecondIconClick}>
          <AddIcon mr="10px" />
          <Text>Add a {useReplyLables ? "reply" : "comment"}</Text>
        </Flex>
      </Flex>

      {useReplyLables && (
        <Box>
          <Reply />
          <Reply />
          <Reply />
        </Box>
      )}
    </>
  );
};
