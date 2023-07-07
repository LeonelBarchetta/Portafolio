import React from 'react';
import { Box } from '@chakra-ui/react';
import { Hero } from '../Hero/Hero';
import { Features } from '../Features/Featurs';
import { Portafolio } from '../Portafolio/Portafolio';


const Main = () => {
    return(
       <Box bg={"darkgrey"}>
            <Hero/>
            <Features/>
            <Portafolio/>
       </Box>
    )
}

export { Main }