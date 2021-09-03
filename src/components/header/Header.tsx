import { Box, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="header" bg="brand.second" p="20px" textAlign="left">
      <Box maxWidth="1200px" m="0 auto">
        <Heading color="brand.first">Inkitt</Heading>
      </Box>
    </Box>
  );
};
