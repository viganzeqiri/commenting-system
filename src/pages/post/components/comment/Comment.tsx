import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";
import { Controls } from "../controls/Controls";

export const Comment = () => {
  return (
    <Box borderBottom="1px solid" borderColor="brand.second" p="40px 0">
      <Flex alignItems="center">
        <Avatar name="Vigan Zeqiri">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Flex alignItems="center" ml="20px">
          <Text mr="5px">Posted by Vigan Zeqiri</Text>
          <Text fontSize="14px">3 days ago</Text>
        </Flex>
      </Flex>

      <Text fontSize="3xl" mt="10px">
        This is a post
      </Text>

      <Controls useReplyLables />
    </Box>
  );
};
