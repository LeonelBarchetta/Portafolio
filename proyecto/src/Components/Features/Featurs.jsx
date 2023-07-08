import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Titulo2 } from '../Titulo2/Titulo2';
import { Card1 } from '../Card1/Card1';
import { Card2 } from '../Card2/Card2';
import { Card3 } from '../Card3/Card3';

const Features = () => {
    return(
        <Box bg={"darkcyan"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={"2rem"}>
            <Box mb={"3rem"}>
                <Titulo2/>
            </Box>
            <Box display={"flex"}>
                <Card1/>
                <Card2/>
                <Card3/>
            </Box>
        </Box>
    )
}

export { Features }