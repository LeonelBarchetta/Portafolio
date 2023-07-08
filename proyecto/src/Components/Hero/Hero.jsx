import { Box } from '@chakra-ui/react';
import React from 'react';
import { Findme } from '../Findme/Findme';
import { Bestskills } from '../Bestskills/Bestskills';
import { Imagenperfil } from '../Imagenperfil/Imagenperfil';
import { Titulo } from '../Titulo/Titulo';

const Hero = () => {
    return(
        <Box pt={"7rem"} w={"75%"} m={"0 auto"} bg={"lime"} display={"flex"} justifyContent={"space-between"} pb={"2rem"}>
            <Box>
                <Titulo/>
                <Box display={"flex"} justifyContent={"space-between"} w={"60%"}>
                    <Findme/>
                    <Bestskills/>
                </Box>
            </Box>
            <Box>
                <Imagenperfil/>
            </Box>
        </Box>
    )
}

export { Hero }