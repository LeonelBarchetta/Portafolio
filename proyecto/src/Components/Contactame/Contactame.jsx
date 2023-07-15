import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Titulo5 } from '../Titulo5/Titulo5';
import { Info } from '../Info/Info';
import { Mail } from '../Mail/Mail';

const Contactame = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box  bg={"#212428"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={{base:"4.5rem",md:"5rem",lg:"5rem",xl:"6rem","2xl":"8rem"}}borderBottom={"0.1rem solid black"}>
            <Titulo5/>
            <Box display={{base:"column",lg:"flex"}} justifyContent={"space-between"} mt={{base:"2rem",xl:"3rem"}} columnGap={{lg:"1.5rem"}}>
                <Info/>
                <Mail/>
            </Box>
        </Box>
    )
}

export { Contactame }