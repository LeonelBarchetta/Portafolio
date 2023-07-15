import { Box, Divider } from '@chakra-ui/react';
import React from 'react';

const Decoracion = () => {
    return(
        <Box>
            <Box h={{base:"1.6rem",xl:"2rem"}} w={"0.18rem"} bg={"black"} border={"black"} ml={"0.37rem"}></Box>
            <Box display={"flex"} alignItems={"center"}>
                <Box border={"0.22rem solid black"} p={"0.3rem"} borderRadius={"50%"}></Box>
                <Box bg={"black"} border={"black"} w={"1rem"} h={"0.18rem"}></Box>
            </Box>
            <Box h={{base:"12.8rem",md:"11.8rem",lg:"12.5rem",xl:"14.5rem","2xl":"16.8rem"}} w={"0.18rem"} bg={"black"} border={"black"} ml={"0.37rem"}></Box>
            <Box display={"flex"} alignItems={"center"}>
                <Box border={"0.22rem solid black"} p={"0.3rem"} borderRadius={"50%"}></Box>
                <Box bg={"black"} border={"black"} w={"1rem"} h={"0.18rem"}></Box>
            </Box>
            <Box h={{base:"12.8rem",md:"11.8rem",lg:"12.5rem",xl:"14.5rem","2xl":"16.5rem"}} w={"0.18rem"} bg={"black"} border={"black"} ml={"0.37rem"}></Box>
            <Box display={"flex"} alignItems={"center"}>
                <Box border={"0.22rem solid black"} p={"0.3rem"} borderRadius={"50%"}></Box>
                <Box bg={"black"} border={"black"} w={"1rem"} h={"0.18rem"}></Box>
            </Box>
            <Box h={{base:"8rem",md:"8rem",lg:"8.5rem",xl:"10rem","2xl":"12rem"}} w={"0.18rem"} bg={"black"} border={"black"} ml={"0.37rem"}></Box>
        </Box>
    )
}

export { Decoracion }