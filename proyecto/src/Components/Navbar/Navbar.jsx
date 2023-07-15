import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import burger from "/burger.svg"


const Navbar = () => {
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
        color={"#C4D0DF"} 
        columnGap={{lg:"1.5rem",xl:"2rem","2xl":"3rem"}} 
        fontSize={{lg:"0.5rem",xl:"0.6rem","2xl":"1rem"}} 
        alignItems={"center"}>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}} >INICIO </Text>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}}>FEATURES</Text>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}}>PORTAFOLIO </Text>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}}>RESUMEN </Text>
            <Button 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            borderRadius={"0.3rem"} 
            bgGradient="linear(to-r, #1E2125, #23272B)"  
            w={{lg:"6rem",xl:"6.5rem","2xl":"9.5rem"}} 
            h={{lg:"2rem",xl:"2.5rem","2xl":"3rem"}}  
            boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"}
            color={"#ff004c"}
            fontSize={{lg:"0.5rem",xl:"0.6rem","2xl":"1rem"}}  
            _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)"}}
            position={"1"}
            >CONTACTAME
            </Button>
            <Box borderRadius={"50%"} _hover={{cursor:"pointer",bg:"#3A3A3A"}}>
                <Image src={burger} display={{lg:"none"}} h={{base:"2rem",md:"3rem"}}/>
            </Box>
            

            
        </Box>
    )
}

export { Navbar }