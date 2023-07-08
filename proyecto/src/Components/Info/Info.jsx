import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Findme } from '../Findme/Findme';

const Info = () => {
    return(
        <Box border={"0.1rem solid black"} p={"1rem"} w={"50%"}>
            <Image></Image>
            <Box>
                <Heading>Leonel barchetta</Heading>
                <Text>Desarrollador Web</Text>
            </Box>
            <Text> 
                Estoy disponible como trabajador freelancer. Contacta comigo a traves de mi cuenta
            </Text>
            <Box>
                <Text>
                    phone: +11 2290 8402
                </Text>
                <Text>
                    Email: barchettaleonel@gmail.com
                </Text>
            </Box>
            
            <Findme/>
        </Box>
    )
}

export { Info }