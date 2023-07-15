import { Box , Image, Text } from '@chakra-ui/react';
import React from 'react';
import facebook from "/facebook.svg"
import instagram from "/instagram.svg"
import github from "/github.svg"

const Findme = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box >
            <Text color={"#C4D0DF"} 
            fontSize={{base:"0.5rem",md:"0.6rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}
            mb={{base:"0.9rem",md:"1rem",lg:"1rem",xl:"1.2rem","2xl":"1.5rem"}}>ENCUENTRAME EN</Text>
            <Box display={"flex"} columnGap={{base:"0.5rem",md:"0.6rem",lg:"1.5rem",xl:"1.6rem","2xl":"1.8rem"}}>
                <Box 
                h={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}} 
                w={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}  
                display={"flex"} 
                alignItems={"center"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" transition=" background 0.3s,
                transform 0.2s;" _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)" , cursor:"pointer"}}>
                    <Image 
                    h={{base:"0.6rem",md:"0.7rem",lg:"0.7rem",xl:"1rem","2xl":"1.3rem"}}
                    borderRadius={"none"} src={facebook}/></Box>
                <Box 
                h={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}} 
                w={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}  
                display={"flex"}  alignItems={"center"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" transition=" background 0.3s,
                transform 0.2s;" _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)" , cursor:"pointer"}}>
                    <Image h={{base:"0.6rem",md:"0.7rem",lg:"0.7rem",xl:"1rem","2xl":"1.3rem"}}  borderRadius={"none"} src={instagram}/></Box>
                <Box 
                h={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}
                w={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.2rem","2xl":"3rem"}}  
                display={"flex"}  alignItems={"center"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" transition=" background 0.3s,
                transform 0.2s;" _hover={{  bgGradient:"linear(to-r, #1f2225, #3d444b)" , cursor:"pointer"}}>
                    <Image h={{base:"0.6rem",md:"0.7rem",lg:"0.7rem",xl:"1rem","2xl":"1.3rem"}}  borderRadius={"none"} src={github}/></Box>
            </Box>
    
        </Box>
    )
}

export { Findme }