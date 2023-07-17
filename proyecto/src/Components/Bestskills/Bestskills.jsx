import React from 'react';
import { Box , Image, Text } from '@chakra-ui/react';
import html from "/Img/html.svg"
import css from "/Img/css.svg"
import js from "/Img/js.svg"

const Bestskills = () => {
    return(
        <Box >
            <Text color={"#C4D0DF"} 
            fontSize={{base:"0.5rem",md:"0.6rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}
            mb={{base:"0.9rem",md:"1rem",lg:"1rem",xl:"1.2rem","2xl":"1.5rem"}}>MEJORES HABILIDADES</Text>
            <Box display={"flex"} columnGap={{base:"0.5rem",md:"0.6rem",lg:"1.5rem",xl:"1.6rem","2xl":"1.8rem"}}>
                <Box 
                h={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}
                w={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}  
                display={"flex"} alignItems={"center"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)">
                    <Image h={{base:"0.6rem",md:"0.7rem",lg:"0.7rem",xl:"1rem","2xl":"1.3rem"}} src={html}/></Box>
                <Box 
                h={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}
                w={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}  
                display={"flex"} alignItems={"center"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)">
                    <Image h={{base:"0.6rem",md:"0.7rem",lg:"0.7rem",xl:"1rem","2xl":"1.3rem"}} src={css}/></Box>
                <Box 
                h={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}} 
                w={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}  
                display={"flex"} alignItems={"center"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)">
                    <Image h={{base:"0.6rem",md:"0.7rem",lg:"0.7rem",xl:"1rem","2xl":"1.3rem"}} src={js}/></Box>
            </Box>
    
        </Box>
    )
}

export { Bestskills }