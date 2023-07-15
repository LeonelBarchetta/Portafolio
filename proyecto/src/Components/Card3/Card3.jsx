import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import wifi from "/wifi.svg"

const Card3 = () => {
    return(
        <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)"  p={{base:"1.5rem",md:"1.8rem",lg:"2rem",xl:"2rem","2xl":"2.4rem"}} mb={{base:"1rem",md:"0rem",lg:"0rem",xl:"0rem","2xl":"0rem"}}>
            <Image src={wifi} w={{base:"2rem",md:"2.5rem",lg:"3rem",xl:"3.2rem","2xl":"4.3rem"}}/>
            <Heading color={"#C4D0DF"} mb={"1rem"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mt={"1rem"}>estrategias de SEO</Heading>
            <Text color={"#C4D0DF"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}}>Como desarrollador web, puedo contribuir a mejorar la visibilidad de tu sitio web en los motores de búsqueda.</Text>
        </Box>
    )
}

export { Card3 }