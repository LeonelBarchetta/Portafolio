import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Label2 = () => {
    return(
        <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"}  w={"50%"}>
            <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                <Box >
                    <Heading color={"#C4D0DF"} fontSize={"1rem"} mb={"0.5rem"}>Phyton</Heading>
                    <Text color={"gray"} fontSize={"0.7rem"} >Escuela Secundaria E.C.E.A (2019 - 2021)</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={"1.5rem"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={"0.7rem"} mt={"0.7rem"}>4.50/5</Box>
            </Box>
            <Text  color={"gray"} fontSize={"0.7rem"} mt={"1rem"}>
                Adquirí habilidades prácticas en la sintaxis de Python, la manipulación de datos, la creación de funciones y la resolución de problemas algorítmicos.
            </Text>

        </Box>
    )
}

export { Label2 }