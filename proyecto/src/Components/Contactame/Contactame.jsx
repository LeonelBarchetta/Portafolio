import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Titulo5 } from '../Titulo5/Titulo5';
import { Info } from '../Info/Info';
import { Mail } from '../Mail/Mail';

const Contactame = () => {
    return(
        <Box bg={"darkorange"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={"2rem"}>
            <Titulo5/>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Info/>
                <Mail/>
            </Box>
        </Box>
    )
}

export { Contactame }