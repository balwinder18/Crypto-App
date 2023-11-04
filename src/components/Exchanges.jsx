import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack,  VStack ,Image, Heading ,Text } from '@chakra-ui/react'
import Loader from './loader'

const Exchanges = () => {
         
   const [exchanges , setexchanges] = useState([]);
   const [loading , setloading] = useState(true);
     useEffect(() => {
      
     const fetchexchanges = async ()=> {
      const {data}  = await axios.get(`${server}/exchanges`)
      setexchanges(data);
      console.log(data);
      setloading(false);
     
       
    }

    fetchexchanges();
  }, [])

  return (
    <Container maxW={'container.xl'}>
     {loading ? (<Loader />) :
     (
      
        
        <HStack wrap="wrap">
          {
            exchanges.map((i)=>(
              <ExchangeCard key={i.trust_score_rank} url={i.url} name={i.name} rank={i.trust_score_rank} img={i.image} />

            )) 
          }
        </HStack>
        
      
     )}
</Container>
);

}
        const ExchangeCard = ({url,rank,name,img})=>(
                    <a href={url} target={"blank"}>

            
              <VStack p={"4"} w={"52"} shadow={"lg"} m={"11"} borderRadius={"lg"}>
                <Image src={img} w={"9"} h={"9"} objectFit={"contain"} alt={"alternate"}/>
                <Heading size={"md"} noOfLines={1}>
                  {rank}
                </Heading>
                <Text noOfLines={"1"}>{name}</Text>
              </VStack>
              </a>
        );
       


export default Exchanges;
     
