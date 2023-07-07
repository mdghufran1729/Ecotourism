
import React, {useState, useEffect } from 'react';
import { Card,Box,Flex,CardBody, CardFooter,Image,Stack,Heading,Text,ButtonGroup,Button,Divider,Center} from '@chakra-ui/react'


const CardComp = ({elem}) => {
  console.log(elem.image)
   
  
    return <div>
    
  <Card maxW='sm'>
    <CardBody>
      <Image
        src={elem.image}
        alt='paris mountain'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>Explore the Beauty of Mountains</Heading>
        <Text>
        Immerse yourself in the breathtaking beauty of majestic mountains.
        </Text>
        <Text color='green.10000' fontSize='xl'>
        Price : $450 per week &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{color:'red'}}>View : 360<sup>0</sup></span>
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter ml={10}>
    <ButtonGroup spacing='2' >
      <Button variant='solid' colorScheme='blue' gap={40}>
        Book now
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant='ghost' colorScheme='blue' gap={40}>
        See more
      </Button>
    </ButtonGroup>
  </CardFooter>
  </Card>
    </div>;
  };
  
  export default CardComp;
  