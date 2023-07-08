import React, { useState } from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Image,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { RiStarFill, RiStarHalfLine, RiStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Link as Rlink } from "react-router-dom";
const PackagesCard = ({
  image,
  title,
  duration,
  route,
  description,
  rating,
  price,
  date,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderRatingStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RiStarFill key={`star-${i}`} color="goldenrod" />);
    }

    if (hasHalfStar) {
      stars.push(<RiStarHalfLine key="half-star" color="goldenrod" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<RiStarLine key={`empty-star-${i}`} color="gray.300" />);
    }

    return stars;
  };

  return (
    <Card
      maxW="md"
      height="100%"
      boxShadow="md"
      borderRadius="md"
      padding="16px"
      transition="transform 0.3s"
      transform={isHovered ? "scale(1.05)" : "scale(1)"}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      marginBottom="20px" // Add spacing between each card
      marginRight="20px" // Add padding on the right side
    >
      <CardBody>
        <Flex height="100%">
          <Image
            src={image}
            alt={title}
            borderRadius="lg"
            boxSize="150px"
            objectFit="cover"
          />
          <Stack ml="4" spacing="3" textAlign="left">
            <Heading size="md">{title}</Heading>
            <Text fontSize="sm" fontWeight="bold" color="blue.600">
              Route: {route}
            </Text>
            <Text>{description}</Text>
            <Box display="flex" alignItems="center">
              {renderRatingStars().map((star, index) => (
                <Box key={index} color={star.props.color}>
                  {star}
                </Box>
              ))}
            </Box>
            <Text>Price: &#8377; {price}</Text>
            <Text>Date: {date}</Text>
          </Stack>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="center">
        <ButtonGroup spacing="2" alignItems="center">
          <Link to={`/booking/${title}`}>
            <Button colorScheme="teal" as={Rlink} to={"/address"}>
              Book Now
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PackagesCard;
