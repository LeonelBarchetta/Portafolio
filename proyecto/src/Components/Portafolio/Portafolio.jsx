import React from 'react';
import { Box } from '@chakra-ui/react';
import { Titulo3 } from '../Titulo3/Titulo';
import { Pagina1 } from '../Pagina1/Pagina1';
import { Pagina2 } from '../Pagina2/Pagina2';
import { Pagina3 } from '../Pagina3/Pagina3';

const Portafolio = () => {
    return(
        <Box bg={"darkgoldenrod"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={"2rem"}>
            <Box >
                <Titulo3/>
            </Box>
            <Box display={"flex"}>
                <Pagina1/>
                <Pagina2/>
                <Pagina3/>
            </Box>

        </Box>
    )
}

export { Portafolio }