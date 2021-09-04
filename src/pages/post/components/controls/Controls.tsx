import { Flex, Text } from "@chakra-ui/react";
import { AddIcon, ChatIcon } from "@chakra-ui/icons";

interface ControlsProps {
  commentsNumber: number;
  useReplyLables?: boolean;
  hideAddButton?: boolean;
  onFirstIconClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onSecondIconClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Controls: React.FC<ControlsProps> = ({
  commentsNumber,
  useReplyLables = false,
  onFirstIconClick,
  onSecondIconClick,
  hideAddButton = false,
}) => {
  return (
    <Flex alignItems="center">
      <Flex
        as="button"
        alignItems="center"
        mr="20px"
        onClick={onFirstIconClick}
      >
        <ChatIcon mr="10px" />
        <Text>
          {commentsNumber} {useReplyLables ? "Replies" : "Comments"}
        </Text>
      </Flex>

      {!hideAddButton && (
        <Flex
          as="button"
          alignItems="center"
          onClick={onSecondIconClick}
          data-testid="add-reply"
        >
          <AddIcon mr="10px" />
          <Text>Add a {useReplyLables ? "reply" : "comment"}</Text>
        </Flex>
      )}
    </Flex>
  );
};
