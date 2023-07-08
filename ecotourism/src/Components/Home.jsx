import React from "react";
import { Link as Rlink } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Box my={16}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          color="whiteAlpha.900"
          mt={200} // Set text color to whiteAlpha.900
        >
          Discover the Hidden Gems
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          color="whiteAlpha.900"
          mt={-5}
        >
          of Hillside Villages
        </Text>
        <Text
          fontSize="lg"
          textAlign="center"
          mb={8}
          color="white" // Set text color to white
        >
          Escape to breathtaking views, charming local traditions
        </Text>
        <Text fontSize="lg" textAlign="center" mb={8} color="white" mt={-6}>
          and sustainable lifestyles in Ecotourism picturesque hillside
          villages.
        </Text>
        <Button
          as={Rlink}
          display={{ base: "none", md: "inline-flex" }}
          fontSize="lg"
          fontWeight={600}
          color="black" // Set button text color to white
          p="5"
          mr="55px"
          borderRadius="20px"
          backgroundColor="#face54"
          _hover={{
            bg: "orange.300",
          }}
          mb={400} // Add bottom margin to the button
        >
          Start Exploring
        </Button>
      </Box>
    </div>
  );
};

export default Home;
