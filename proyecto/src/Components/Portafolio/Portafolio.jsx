import React from 'react';
import { Box } from '@chakra-ui/react';
import { Titulo3 } from '../Titulo3/Titulo3';
import { Pagina1 } from '../Pagina1/Pagina1';
import { Pagina2 } from '../Pagina2/Pagina2';
import { Pagina3 } from '../Pagina3/Pagina3';

const Portafolio = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box bg={"#212428"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={{base:"4.5rem",md:"5rem",lg:"5rem",xl:"6rem","2xl":"8rem"}} borderBottom={"0.1rem solid black"}>
            <Box mb={{base:"2rem",lg:"2rem","2xl":"3rem"}}>
                <Titulo3/>
            </Box>
            <Box display={{base:"column",md:"flex",lg:"flex","2xl":"flex"}} justifyContent={"space-between"} columnGap={{base:"1rem",lg:"2rem"}}>
                <Pagina1/>
                <Pagina2/>
                <Pagina3/>
            </Box>

        </Box>
    )
}

export { Portafolio }