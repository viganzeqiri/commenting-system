import { Box } from "@chakra-ui/react";
import { Header, Footer } from "components";
import { Post } from "pages/post/Post";

import "./App.css";

export function App() {
  return (
    <div className="app">
      <Header />

      <Box as="section" minH="80vh">
        <Post />
      </Box>

      <Footer />
    </div>
  );
}
