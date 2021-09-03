import {
  Box,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { QuestionIcon, EmailIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Box
      as="footer"
      minH="200px"
      p="40px 80px"
      textAlign="left"
      color="brand.first"
      bg="brand.second"
    >
      <Box maxWidth="1200px" m="0 auto">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box>
            <List spacing={3}>
              <Heading>Inkitt</Heading>
              <ListItem>
                <ListIcon as={QuestionIcon} />
                Company
              </ListItem>

              <ListItem>
                <ListIcon as={EmailIcon} />
                About
              </ListItem>
            </List>

            <Box mt="40px" fontSize="10px">
              <Text>&#174; All rights resereved</Text>
            </Box>
          </Box>

          <Box>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            animi similique quidem dolore odio obcaecati nihil, temporibus earum
            aliquid, odit suscipit aut quis voluptatem quae, rem reprehenderit
            nesciunt esse est. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </Box>

          <Box>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            animi similique quidem dolore odio obcaecati nihil, temporibus earum
            aliquid, odit suscipit aut quis voluptatem quae, rem reprehenderit
            nesciunt esse est. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </Box>

          <Box>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            animi similique quidem dolore odio obcaecati nihil, temporibus earum
            aliquid, odit suscipit aut quis voluptatem quae, rem reprehenderit
            nesciunt esse est. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
