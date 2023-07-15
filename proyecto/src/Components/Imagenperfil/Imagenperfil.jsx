import React from 'react';
import perfil from "/perfil.png"
import { Box, Image } from '@chakra-ui/react';

const Imagenperfil = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box display={"flex"} alignItems={"flex-end"}>
            <Image w={{base:"15rem",md:"60rem",lg:"45rem",xl:"42rem","2xl":"63rem"}} src={perfil} />
        </Box>
    )
}

export { Imagenperfil }