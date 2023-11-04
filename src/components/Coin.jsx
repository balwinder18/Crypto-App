import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack, VStack, Image, Heading, Text, RadioGroup, Radio, Button, Link } from '@chakra-ui/react'
import Loader from './loader'
 
const Coin = () => {
  
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [currency , setcurrency] = useState("inr");
  const [page , setpage] = useState("1");
  useEffect(() => {

    const fetchcoins = async () => {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
      setcoins(data);
      console.log(data);
      setloading(false);


    }

    fetchcoins();
  }, [currency,page])
     
    const changepage =(page) =>{
         setpage(page);
         setloading(true);
    }  
      
    const btn = new Array(95).fill(1);
  return (
    <Container maxW={'container.xl'}>
                 
        
      {loading ? (<Loader />) :
        (
          <>
           <HStack m={"29px"}>
           <RadioGroup value={currency} onChange={setcurrency}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>

               </RadioGroup>
               </HStack>  
           
          <HStack wrap="wrap">
              
            {
              coins.map((i) => (
                <ExchangeCard id={i.id} key={i.id} url={i.url} name={i.name} rank={i.trust_score_rank} img={i.image} price={i.current_price} currencySymbol={currency} />

              ))
            }
          </HStack>
            
            <HStack overflowY={'auto'}>
              {
              btn.map((item ,index)=>(
                <Button 
                onClick={()=>{
                  changepage(index+1);
                }}> {index+1}</Button>
              ))
            }
            </HStack>

             </>
        )}
    </Container>
  );

}
const ExchangeCard = ({ id,rank, name, img, price, currencySymbol}) => (
 <Link to={`/coin/${id}`} target={"blank"}>
  <VStack p={"4"} w={"52"} shadow={"lg"} m={"11"} borderRadius={"lg"} >
      <Image src={img} w={"9"} h={"9"} objectFit={"contain"} alt={"alternate"} />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={"1"}>{name}</Text>
      <Text noOfLines={"1"}>{currencySymbol} {price}</Text>
    </VStack>
 </Link>
);



export default Coin;

