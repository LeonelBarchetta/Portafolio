import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Label2 = () => {
    return(
        <Box border={"0.1rem solid black"} p={"1rem"}>
            <Box display={"flex"}>
                <Box >
                    <Heading>Phyton</Heading>
                    <Text>Escuela Secundaria E.C.E.A (2019 - 2021)</Text>
                </Box>
                <Box>4.50/5</Box>
            </Box>
            <Text>
                Adquirí habilidades prácticas en la sintaxis de Python, la manipulación de datos, la creación de funciones y la resolución de problemas algorítmicos.
            </Text>

        </Box>
    )
}

export { Label2 }