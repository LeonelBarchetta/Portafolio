import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Label3 = () => {
    return(
        <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"}  w={"50%"}>
            <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                <Box >
                    <Heading color={"#C4D0DF"} fontSize={"1rem"} mb={"0.5rem"}>curso de programacion</Heading>
                    <Text color={"gray"} fontSize={"0.7rem"}>EGG: Curso online (2022)</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={"1.5rem"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={"0.7rem"} mt={"0.7rem"}>4.80/5</Box>
            </Box>
            <Text  color={"gray"} fontSize={"0.7rem"} mt={"1rem"}>
                Pude sumergirme en los conceptos fundamentales de la programación y adquirir una comprensión sólida de los principios básicos.
            </Text>

        </Box>
    )
}

export { Label3 }