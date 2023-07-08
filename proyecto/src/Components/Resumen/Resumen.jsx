import React from 'react';
import { Box } from '@chakra-ui/react';
import { Titulo4 } from '../Titulo4/Titulo4';
import { Decoracion } from '../Decoracion/Decoracion';
import { Label1 } from '../Label1/Label1';
import { Label2 } from '../Label2/Label2';
import { Label3 } from '../Label3/Label3';

const Resumen = () => {
    return(
        <Box bg={'darkkhaki'} w={"75%"} m={"0 auto"} pt={"5rem"} pb={"2rem"}>
            <Box>
                <Titulo4/>
            </Box>
            <Box display={"flex"}>
                <Decoracion/>
                <Box>
                    <Label1/>
                    <Label2/>
                    <Label3/>
                </Box>
            </Box>
        </Box>
    )
}

export { Resumen }