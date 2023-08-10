import CardComp from "./CardComp";
import {
  SimpleGrid,
  Card,
  Box,
  Flex,
  CardBody,
  FormControl,
  FormLabel,
  Select,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Destination = () => {
  const [Data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sortValue, setSortValue] = useState(null);
  const [delibrately, setdelibrately] = useState(null);
  var url = `http://localhost:8080/destinations?_page=${page}&_limit=6`;

  if (name && sortValue) {
    url = `http://localhost:8080/destinations?name=${name}&_page=${page}&_limit=6&_sort=price&_order=${sortValue}`;
  } else if (sortValue) {
    url = `http://localhost:8080/destinations?_page=${page}&_limit=6&_sort=price&_order=${sortValue}`;
  } else if (name) {
    url = `http://localhost:8080/destinations?name=${name}&_page=${page}&_limit=6`;
  }

  useEffect(() => {
    fetchData(url);
  }, [name, page, sortValue, delibrately]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const totalCount = response.headers.get("X-total-Count");
      setTotal(Math.floor(totalCount / 6));
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (name) => {
    setPage(1);
    setName(name);
  };

  const handleSort = (value) => {
    if (name == null) {
      setdelibrately(true);
    }
    console.log(value);
    setPage(1);
    setSortValue(value);
  };

  return (
    <div>
      <Box textAlign="center" ml={10} mt={20}>
        <Heading as="h6" mb={5}>
          A Great Collection of our packages
        </Heading>
        <Flex justify="center" align="center" flexWrap="wrap" gap={20}>
          <Button colorScheme="teal" onClick={() => handleButtonClick(null)}>
            All
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => handleButtonClick("mountain")}
          >
            Mountain
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => handleButtonClick("resort")}
          >
            Resort
          </Button>
          <Button colorScheme="teal" onClick={() => handleButtonClick("beach")}>
            Beach
          </Button>
          <Button
            colorScheme="teal"
            onClick={() => handleButtonClick("honeymoon")}
          >
            Honeymoon
          </Button>

          <select
            style={{
              padding: "0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid #ccc",
              backgroundColor: "teal",
              color: "white",
              outline: "none",
              // Add more custom styles as needed
            }}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </Flex>
      </Box>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        mt={10}
        ml={75}
        mb={50}
      >
        {Data.map((elem, i) => {
          return <CardComp key={i} elem={elem} />;
        })}
      </SimpleGrid>
      <Flex justify="center" mt={5} mb={60}>
        <Button
          isDisabled={page == 1}
          colorScheme="teal"
          mr={2}
          size="md"
          rounded="full"
          width={20}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>{" "}
        &nbsp;
        <Button fontSize={20} fontWeight="bold">
          {page}
        </Button>
        <Button
          isDisabled={page == total}
          colorScheme="teal"
          ml={5}
          size="md"
          rounded="full"
          width={20}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
};

export default Destination;
