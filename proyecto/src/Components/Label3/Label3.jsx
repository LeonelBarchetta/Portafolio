import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Label3 = () => {
    return(
        <Box border={"0.1rem solid black"} p={"1rem"}>
            <Box display={"flex"}>
                <Box >
                    <Heading>curso de programacion</Heading>
                    <Text>EGG: Curso online (2022)</Text>
                </Box>
                <Box>4.80/5</Box>
            </Box>
            <Text>
                Pude sumergirme en los conceptos fundamentales de la programación y adquirir una comprensión sólida de los principios básicos.
            </Text>

        </Box>
    )
}

export { Label3 }