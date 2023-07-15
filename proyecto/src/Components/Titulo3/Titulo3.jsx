import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Titulo3 = () => {
    return(
        <Box textAlign={"center"}>
            <Text color={"#DE0748"} fontSize={{base:"0.7rem",md:"0.7rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}>VISITA MI PORTAFOLIO Y DEJA TU FEEDBACK</Text>
            <Heading color={"#C4D0DF"} fontSize={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.3rem","2xl":"3rem"}}>Mi Portafolio</Heading>
        </Box>
    )
}

export { Titulo3 }