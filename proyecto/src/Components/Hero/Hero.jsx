import { Box } from '@chakra-ui/react';
import React from 'react';
import { Findme } from '../Findme/Findme';
import { Bestskills } from '../Bestskills/Bestskills';
import { Imagenperfil } from '../Imagenperfil/Imagenperfil';
import { Titulo } from '../Titulo/Titulo';

const Hero = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box 
        pt={{base:"6rem",md:"6rem",lg:"7rem",xl:"7.5rem","2xl":"14rem"}} 
        w={"75%"} m={"0 auto"} bg={"#212428"} 
        display={{base:"column",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}}  
        justifyContent={"space-between"} 
        pb={{base:"4.5rem",md:"5rem",lg:"5rem",xl:"6rem","2xl":"8rem"}}
        borderBottom={"0.1rem solid black"} alignItems={"flex-end"}>
            <Box>
                <Titulo/>
                <Box display={"flex"} 
                justifyContent={"space-between"} w={"80%"}>
                    <Findme/>
                    <Bestskills/>
                </Box>
            </Box>
            <Box 
            display={"flex"} 
            alignContent={"flex-end"} justifyContent={"center"} 
            h={{base:"18rem",md:"20rem",lg:"20rem",xl:"22rem","2xl":"30rem"}}  
            boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} 
            borderRadius={"0.3rem"} 
            bgGradient="linear(to-r, #1E2125, #23272B)"
            mt={{base:"3rem",md:"0rem",lg:"0rem",xl:"0rem","2xl":"0rem"}}>
                <Imagenperfil/>
            </Box>
        </Box>
    )
}

export { Hero }