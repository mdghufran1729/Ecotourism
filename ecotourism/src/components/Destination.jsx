
import CardComp from './CardComp';
import {SimpleGrid, Card,Box,Flex,CardBody, CardFooter,Image,Stack,Heading,Text,ButtonGroup,Button,Divider,Center} from '@chakra-ui/react'
import React,{useState,useEffect} from "react"
const Destination = () => {
    const [Data,setData]=useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/destinations");
        const data = await response.json();
        setData(data.mountain);
        console.log(data.mountain);
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div>
    <Box textAlign="center">
      <Heading as="h4" mb={6}>Plan Your Destination</Heading>
      <Flex justify="center" align="center" flexWrap="wrap" gap={20}>
        <Button colorScheme="blue">Mountain</Button>
        <Button colorScheme="blue">Hill</Button>
        <Button colorScheme="blue">Resort</Button>
        <Button colorScheme="blue">Beach</Button>
      </Flex>
    </Box>
    
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))' mt={10}>
        {Data.map((elem,i)=>{
            return <CardComp key ={i} elem={elem}/>
        })

           
        }
        </SimpleGrid>
    </div>
  )
}

export default Destination