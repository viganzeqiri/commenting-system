import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";

const buttonProps = {
  borderColor: "brand.first",
  color: "brand.first",
  variant: "outline",
  "aria-label": "Submit reply",
};

export const Upvotes = () => {
  return (
    <Flex alignItems="center">
      <Flex alignItems="center">
        <IconButton {...buttonProps} icon={<ArrowUpIcon />} />
        <Text m="0 8px">10</Text>
        <IconButton {...buttonProps} icon={<ArrowDownIcon />} />
      </Flex>
    </Flex>
  );
};
