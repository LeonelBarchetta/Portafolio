import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

const Titulo = () => {
    return(
        <Box>
            <Text>
                BIENVENIDO A MI MUNDO
            </Text>
            <Heading display={"flex"} mb={"0.5rem"} >
                Hola, soy<Text color={"red"} ml={"0.5rem"}> Leonel</Text>
            </Heading>
            <Heading mb={"0.5rem"}>
                Diseñador.|
            </Heading>
            <Text mb={"5rem"} w={"60%"}>
                Soy un desarrollador web con experiencia en la creación de sitios y aplicaciones dinámicas y atractivas. Mi enfoque principal es combinar un sólido conocimiento de lenguajes de programación como HTML, CSS y JavaScript.
            </Text>
        </Box>

    )
}

export { Titulo }