import React, { useState } from "react";
import PackagesCard from "../Components/PackagesCard";
import { useSelector } from "react-redux";
import { Flex, Center, Box, Select } from "@chakra-ui/react";

const Packages = () => {
  const packages = useSelector((state) => state.app.packages);
  const [ratingSortOrder, setRatingSortOrder] = useState("ascending");
  const [priceSortOrder, setPriceSortOrder] = useState("ascending");

  const handleRatingSortChange = (e) => {
    setRatingSortOrder(e.target.value);
  };

  const handlePriceSortChange = (e) => {
    setPriceSortOrder(e.target.value);
  };

  const sortPackagesByRating = (order) => {
    const sortedPackages = [...packages];
    if (order === "ascending") {
      return sortedPackages.sort((a, b) => a.rating - b.rating);
    } else if (order === "descending") {
      return sortedPackages.sort((a, b) => b.rating - a.rating);
    }
    return sortedPackages;
  };

  const sortPackagesByPrice = (order) => {
    const sortedPackages = [...packages];
    if (order === "ascending") {
      return sortedPackages.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (order === "descending") {
      return sortedPackages.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }
    return sortedPackages;
  };

  const sortedPackagesByRating = sortPackagesByRating(ratingSortOrder);
  const sortedPackagesByPrice = sortPackagesByPrice(priceSortOrder);

  const combinedPackages = [
    ...sortedPackagesByRating,
    ...sortedPackagesByPrice,
  ];

  return (
    <Center bg="transparent">
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="1200px"
        alignItems="flex-start"
      >
        <Box width="70%" mb="20px" mx="20px">
          <Flex direction="row">
            <Box mr="10px">
              <Select
                value={ratingSortOrder}
                onChange={handleRatingSortChange}
                width="100%"
                maxW="200px"
              >
                <option value="ascending">Sort by Rating (Low to High)</option>
                <option value="descending">Sort by Rating (High to Low)</option>
              </Select>
            </Box>
          </Flex>
        </Box>

        {combinedPackages
          .sort((a, b) => {
            if (ratingSortOrder === "ascending") {
              return a.rating - b.rating;
            } else if (ratingSortOrder === "descending") {
              return b.rating - a.rating;
            }
            return 0;
          })
          .map((packageData, index) => (
            <PackagesCard key={index} {...packageData} />
          ))}
      </Flex>
    </Center>
  );
};

export default Packages;
