import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import captura2 from "/captura2.jpg"
import corazon from "/corazon.svg"


const Pagina2 = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.5rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={{base:"1rem",md:"1rem",lg:"1rem",xl:"1rem","2xl":"1.5rem"}} _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)" , cursor:"pointer"}}>
            <Image src={captura2} borderRadius={"0.5rem"} mb={{base:"0.5rem","2xl":"1rem"}}/>
            <Box display={"flex"} mb={{base:"0.5rem","2xl":"1rem"}} justifyContent={"space-between"} alignItems={"center"}>
                <Text color={"#DE0748"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} >web</Text>
                <Box display={"flex"} alignItems={"center"}>
                    <Image src={corazon} h={{base:"0.4rem",md:"0.4rem",lg:"0.5rem",xl:"0.7rem","2xl":"1rem"}}/>
                    <Text fontSize={{base:"0.4rem",md:"0.4rem",lg:"0.5rem",xl:"0.7rem","2xl":"1rem"}} color={"gray"}>720</Text>
                </Box>
            </Box>
            <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}}>Elegant Essence Collection</Heading>
        </Box>
    )
}

export { Pagina2 }