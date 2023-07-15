import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Titulo2 } from '../Titulo2/Titulo2';
import { Card1 } from '../Card1/Card1';
import { Card2 } from '../Card2/Card2';
import { Card3 } from '../Card3/Card3';

const Features = () => {
    return(
        <Box bg={"#212428"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={{base:"4.5rem",md:"5rem",lg:"5rem",xl:"6rem","2xl":"8rem"}} borderBottom={"0.1rem solid black"}>
            <Box mb={"3rem"}>
                <Titulo2/>
            </Box>
            <Box display={{base:"column",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}} justifyContent={"space-between"} columnGap={"2rem"}>
                <Card1/>
                <Card2/>
                <Card3/>
            </Box>
        </Box>
    )
}

export { Features }