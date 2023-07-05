import React from 'react';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Box } from '@chakra-ui/react';

const Header = () => {
    return(
        <Box display={"flex"} justifyContent={"space-between"} bg={"darkgray"} alignItems={"center"} position={"fixed"} w={"100%"}>
            <Logo/>
            <Navbar/>
        </Box>
    )
}

export { Header }