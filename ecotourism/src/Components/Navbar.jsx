import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { SiGoogleearth } from "react-icons/si";
import { ADD_USER_LOGIN } from "../Redux/actionTypes";
import { Link as Rlink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ADD_USER_LOGIN,
      payload: isAuthenticated,
    });
  }, [isAuthenticated, dispatch]);
  console.log(isAuthenticated);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        backgroundColor={"#7dbbab"}
        //  style={{backgroundImage: "linear-gradient(to right , #215f37, #125037, #0c4134, #0f332d, #132423)"}}

        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            mr={"70px"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            as={Rlink}
            to={"/"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("white", "white")}
            mr={"120px"}
            ml={"55px"}
            fontSize={"lg"}
            fontWeight={800}
          >
            {/* <SiGoogleearth style={{marginTop:"10px"}}/>  */}
            <SiGoogleearth
              style={{ marginLeft: "-30px", marginBottom: "-26px" }}
              size={30}
            />{" "}
            Ecotourism
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={-2}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {isAuthenticated && user ? (
            <>
              <Button>{user.name}</Button>
              <Button
                colorScheme="blue"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button colorScheme="blue" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
          )}
          <Button
            as={Rlink}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"lg"}
            fontWeight={600}
            color={"white"}
            p={"5"}
            // bg={'orange.400'}
            mr={"55px"}
            // href={'/register'}
            borderRadius={"20px"}
            backgroundColor={"#face54"}
            //   style={{backgroundImage: "linear-gradient(to right, #e26109, #e9701c, #ef7e2c, #f68c3a, #fc9949)"}}
            _hover={{
              bg: "orange.300",
            }}
          >
            Book Now
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("whiteAlpha.900", "white");
  const linkHoverColor = useColorModeValue("gray.200", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={0.1}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={Rlink}
                to={navItem.href}
                p={10}
                // href={navItem.href ?? '#'}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("teal.50", "gray.200") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "teal.300" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"orange.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.500")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "About Us",
    href: "/",
  },
];
