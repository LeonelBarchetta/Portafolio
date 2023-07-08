import React from 'react';
import { Box } from '@chakra-ui/react';
import { Hero } from '../Hero/Hero';
import { Features } from '../Features/Featurs';
import { Portafolio } from '../Portafolio/Portafolio';
import { Resumen } from '../Resumen/Resumen';
import { Contactame } from '../Contactame/Contactame';


const Main = () => {
    return(
       <Box bg={"darkgrey"}>
            <Hero/>
            <Features/>
            <Portafolio/>
            <Resumen/>
            <Contactame/>
       </Box>
    )
}

export { Main }