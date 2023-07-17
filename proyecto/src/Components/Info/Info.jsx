import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Findme } from '../Findme/Findme';
import apreton from "/Img/apreton.jpg"

const Info = () => {
    return(
        <Box  boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={{base:"1rem","2xl":"1.4rem"}} w={{base:"100%",lg:"50%",xl:"50%"}} pb={{base:"1rem",lg:"3rem"}} mb={{base:"1.5rem",lg:"0rem"}}>
            <Image src={apreton} mb={"0.7rem"} borderRadius={"0.4rem"}/>
            <Box>
                <Heading color={"#C4D0DF"} fontSize={"1.5rem"} mb={"0.7rem"}>Leonel barchetta</Heading>
                <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mb={"0.7rem"}>Desarrollador Web</Text>
            </Box>
            <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mb={"0.7rem"}> 
                Estoy disponible como trabajador freelancer. Contacta comigo a traves de mi cuenta
            </Text>
            <Box mb={"1.2rem"}>
                <Heading color={"gray"} display={"flex"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} >
                    phone: <Text color={"#C4D0DF"} ml={"0.2rem"}>+11 2290 8402</Text>
                </Heading>
                <Heading color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} display={"flex"} >
                    Email: <Text color={"#C4D0DF"} ml={"0.2rem"}>barchettaleonel@gmail.com</Text>
                </Heading>
            </Box>
            
            <Findme/>
        </Box>
    )
}

export { Info }