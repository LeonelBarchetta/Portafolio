import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const Titulo = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box>
            <Text color={"#C4D0DF"} 
            mb={"1rem"} 
            fontSize={{base:"0.7rem",md:"0.7rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}} 
            letterSpacing={"0.1rem"}>
                BIENVENIDO A MI MUNDO
            </Text>
            <Heading display={{md:"column",lg:"flex",xl:"flex","2xl":"flex"}} 
            mb={"0.5rem"} 
            fontSize={{base:"2rem",md:"2.5rem",lg:"2.5rem",xl:"3rem","2xl":"4rem"}}
            color={"white"}>
                Hola, soy<Text color={"red"} ml={{md:"0rem",lg:"0.5rem"}}> Leonel</Text>
            </Heading>
            <Heading mb={"0.5rem"} color={"white"} fontSize={{base:"2rem",md:"2.5rem",lg:"2.5rem",xl:"3rem","2xl":"4rem"}}>
                Diseñador.|
            </Heading>
            <Text 
            mb={{base:"3.5rem",md:"4rem",lg:"5rem",xl:"5.5rem","2xl":"6.5rem"}} 
            w={"80%"}  color={"#C4D0DF"} mt={"1rem"} 
            fontSize={{base:"0.5rem",md:"0.7rem",lg:"0.7rem",xl:"0.8rem","2xl":"1.2rem"}}> 
                Soy un desarrollador web con experiencia en la creación de sitios y aplicaciones dinámicas y atractivas. Mi enfoque principal es combinar un sólido conocimiento de lenguajes de programación como HTML, CSS y JavaScript.
            </Text>
        </Box>

    )
}

export { Titulo }