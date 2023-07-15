import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Logo } from '../Logo/Logo';

const Footer = () => {
    return(
        <Box bg={"#212428"} textAlign={"center"} pt={{base:"2rem",xl:"4rem"}} >
            <Logo/>
            <Text color={"gray"} mt={"2rem"} pb={"3rem"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}}>©2023. All rights reserved by Leonel</Text>
        </Box>
    )
}

export { Footer }