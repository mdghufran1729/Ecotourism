import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Flex,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";
const CardComp = ({ elem }) => {
  console.log(elem.image);

  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={elem.image}
            alt="paris mountain"
            borderRadius="md"
            height={60}
          />
          <Stack mt="6" spacing="1">
            <Heading size="md">Explore the Beauty of {elem.name}</Heading>
            <Text>{elem.description}</Text>
            <Text color="green.1000" fontSize="lg" fontWeight="700px">
              Price : ${elem.price}/week
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span style={{ color: "red" }}>country : {elem.country}</span>
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="center">
          <ButtonGroup textAlign="center">
            <Button
              variant="solid"
              colorScheme="teal"
              as={Rlink}
              to={"/address"}
            >
              Book now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComp;
