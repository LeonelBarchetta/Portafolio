import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
    return(
        <Box display={"flex"} color={"white"} columnGap={"1rem"}  >
            <Text>Inicio </Text>
            <Text>Features</Text>
            <Text>Portafolio </Text>
            <Text>Resumen </Text>
            <Text>Contactame </Text>
        </Box>
    )
}

export { Navbar }