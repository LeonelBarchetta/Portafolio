import React from 'react';
import { Box } from '@chakra-ui/react';
import { Hero } from '../Hero/Hero';
import { Features } from '../Features/Featurs';
import { Portafolio } from '../Portafolio/Portafolio';
import { Resumen } from '../Resumen/Resumen';
import { Contactame } from '../Contactame/Contactame';
import { Navbar } from '../Navbar/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Main = () => {
    return(
       <Box bg={"#212428"}>
            
            <Hero/>
            <Features/>
            <Portafolio/>
            <Resumen/>
            <Contactame/>
       </Box>
    )
}

export { Main }