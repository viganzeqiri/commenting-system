import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, Tooltip } from "@chakra-ui/react";

const buttonProps = {
  borderColor: "brand.first",
  color: "brand.first",
  variant: "outline",
  "aria-label": "Submit reply",
};

interface VotesProps {
  votes: number;
  onChange: (type: "upvote" | "downvote") => void;
}

export const Votes: React.FC<VotesProps> = ({ votes, onChange }) => {
  return (
    <Tooltip hasArrow label="Votes" aria-label="A tooltip" placement="top">
      <Flex alignItems="center">
        <Flex alignItems="center">
          <IconButton
            {...buttonProps}
            size="sm"
            icon={<ArrowUpIcon />}
            onClick={() => onChange?.("upvote")}
            data-testid="upvote"
          />
          <Text m="0 8px" data-testid="result">
            {votes}
          </Text>
          <IconButton
            {...buttonProps}
            size="sm"
            icon={<ArrowDownIcon />}
            onClick={() => onChange?.("downvote")}
            data-testid="downvote"
          />
        </Flex>
      </Flex>
    </Tooltip>
  );
};
