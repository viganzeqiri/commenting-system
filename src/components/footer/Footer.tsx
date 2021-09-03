import { Box, Grid, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
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
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={QuestionIcon} />
              Company
            </ListItem>

            <ListItem>
              <ListIcon as={EmailIcon} />
              About
            </ListItem>
          </List>
        </Box>

        <Box>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          animi similique quidem dolore odio obcaecati nihil, temporibus earum
          aliquid, odit suscipit aut quis voluptatem quae, rem reprehenderit
          nesciunt esse est. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Velit quisquam totam tenetur quo maiores amet sapiente officiis
          ea nostrum, sunt nesciunt, impedit quidem qui exercitationem ipsum
          labore error similique culpa.
        </Box>

        <Box>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          animi similique quidem dolore odio obcaecati nihil, temporibus earum
          aliquid, odit suscipit aut quis voluptatem quae, rem reprehenderit
          nesciunt esse est. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </Box>

        <Box>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          animi similique quidem dolore odio obcaecati nihil, temporibus earum
          aliquid, odit suscipit aut quis voluptatem quae, rem reprehenderit
          nesciunt esse est. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolorem, praesentium facilis velit, voluptatum commodi
          aspernatur maiores, voluptates quae reiciendis nihil accusantium
          dicta? Nesciunt tempora laboriosam praesentium nihil voluptatum quia
          placeat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          aspernatur eum officia asperiores perferendis aliquid sint nulla
          culpa, aliquam pariatur rem repellendus accusantium ullam est iure
          quas amet illum odit?
        </Box>
      </Grid>

      <Box mt="40px">
        <Text>&#174; All rights resereved</Text>
      </Box>
    </Box>
  );
};
