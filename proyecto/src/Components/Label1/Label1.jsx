import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Label1 = () => {
    return(
        <Box border={"0.1rem solid black"} p={"1rem"}>
            <Box display={"flex"}>
                <Box >
                    <Heading>Diploma Coderhouse</Heading>
                    <Text>Escuela Secundaria E.C.E.A (2018)</Text>
                </Box>
                <Box>4.30/5</Box>
            </Box>
            <Text>
                Tuve la oportunidad de embarcarme en un curso en Coderhouse, donde pude ampliar mis conocimientos en lenguajes de programación como HTML, CSS.
            </Text>

        </Box>

    )
}

export { Label1 }