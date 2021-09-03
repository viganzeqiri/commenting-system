import { Box } from "@chakra-ui/react";
import { Header, Footer } from "components";
import { Post } from "pages/post/Post";

export function App() {
  return (
    <Box>
      <Header />

      <Box as="section" minH="80vh" maxWidth="1200px" m="0 auto">
        <Post />
      </Box>

      <Footer />
    </Box>
  );
}
