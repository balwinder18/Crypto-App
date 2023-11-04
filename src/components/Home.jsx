import { Box,  Image, Text} from '@chakra-ui/react'
import React from 'react'
import logo from "../components/logo.jpg"

 const Home = () => {
  return     <Box>
      <Image w={"full"} h={"94.7vh"} src={logo}/>
      <Text textAlign={"center"} fontSize={"39px"} mt={"-69px"} color={"whiteAlpha.900"}>
      Xcrypto
    </Text>
    </Box>

     
};
  
export default Home;
