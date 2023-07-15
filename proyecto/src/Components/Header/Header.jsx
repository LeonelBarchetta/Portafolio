import React from 'react';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Box } from '@chakra-ui/react';


const Header = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box 
        display={"flex"} 
        justifyContent={"space-between"} 
        bg={"#212428"} 
        alignItems={"center"} 
        position={"fixed"} 
        w={"100%"} 
        h={{base:"3rem",md:"3rem",lg:"3rem",xl:"3.5rem",'2xl':"5rem"}} 
        p={{base:"0 0.5rem",md:"0 1rem",lg:"0 1rem",xl:"0 2rem","2xl":"0 2rem"}}>
            <Logo/>
            <Navbar/>
        </Box>
    )
}

export { Header }