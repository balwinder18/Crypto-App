import { Avatar, Box, Text, VStack,} from '@chakra-ui/react';
import React from 'react'

 const Footer = () => {
  return (
    <Box bg={"blackAlpha.900"} color={"whiteAlpha.800"} minH={"48px"} px={"20px"} py={"19px"}>
         <VStack alignItems={"flex-start"}>
         
         <Text>
            About Us
         </Text>
         <Text>
            We are the best Crypto information app . Xcrypto is the name.
         </Text>
             
         </VStack>   
         <VStack alignItems={"flex-end"} mt={"-29px"}>
         
         <Avatar>

         </Avatar>
         <Text>
            Our founder
         </Text>
             
         </VStack>
    </Box>
  )
}   
 
 export default Footer;
