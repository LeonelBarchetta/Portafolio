import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../Logo/Logo';

const Footer = () => {
    return(
        <Box bg={"darkgrey"} textAlign={"center"} pt={"2rem"}>
            <Logo/>
            <Text>©2023. All rights reserved by Leonel</Text>
        </Box>
    )
}

export { Footer }