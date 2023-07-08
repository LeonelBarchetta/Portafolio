import { Box, Input, Text, Textarea } from '@chakra-ui/react';
import React from 'react';

const Mail = () => {
    return(
        <Box border={"0.1rem solid black"} p={"1rem"}>
            <Box display={"flex"}>
                <Box>
                    <Text>TU NOMBRE</Text>
                    <Input></Input>
                </Box>
                <Box>
                    <Text>NUMERO DE TELEFONO</Text>
                    <Input></Input>
                </Box>
            </Box>
            <Text>EMAIL</Text>
            <Input></Input>
            <Text>SUJETO</Text>
            <Input></Input>
            <Text>TU MENSAJE</Text>
            <Textarea></Textarea>

            <Box>
                <Text>
                    ENVIAR MENSAJE
                </Text>
            </Box>
        </Box>
    )
}

export { Mail }