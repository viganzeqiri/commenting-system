import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Details = () => {
  return (
    <Box>
      <Flex>
        <Avatar>VZ</Avatar>
        <Flex>
          <Text>Posted by Vigan Zeqiri</Text>
          <Text>3 days ago</Text>
        </Flex>
      </Flex>

      <Text>Post title</Text>
    </Box>
  );
};
