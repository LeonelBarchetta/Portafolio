import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Titulo4 } from '../Titulo4/Titulo4';
import { Decoracion } from '../Decoracion/Decoracion';
import { Label1 } from '../Label1/Label1';
import { Label2 } from '../Label2/Label2';
import { Label3 } from '../Label3/Label3';

const Resumen = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box bg={"#212428"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={{base:"4.5rem",md:"5rem",lg:"5rem",xl:"6rem","2xl":"8rem"}} borderBottom={"0.1rem solid black"}>
            <Box mb={"2rem"}>
                <Titulo4/>

            </Box>
                <Text color={"#DE0748"} fontSize={{base:"0.7rem",md:"0.7rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}>2018 - 2023</Text>
                <Heading color={"#C4D0DF"} fontSize={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.3rem","2xl":"3rem"}}>Calidad de Educacion</Heading>
            <Box display={"flex"} mt={"2rem"}>
                <Decoracion/>
                <Box >
                    <Label1/>
                </Box>
            </Box>
        </Box>
    )
}

export { Resumen }