import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";

export const Details = () => {
  return (
    <Box>
      <Flex alignItems="center">
        <Avatar name="Vigan Zeqiri">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Flex alignItems="center" ml="20px">
          <Text mr="5px">Posted by Vigan Zeqiri</Text>
          <Text fontSize="14px">3 days ago</Text>
        </Flex>
      </Flex>

      <Text fontSize="3xl" mt="10px">
        This is a post
      </Text>
    </Box>
  );
};
