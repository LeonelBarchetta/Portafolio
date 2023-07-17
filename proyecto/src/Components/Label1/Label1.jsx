import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Label1 = () => {
    return(
        <Box>

            
            
            <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"} w={{base:"100%",md:"60%",lg:"50%","2xl":"35rem"}}>
                <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                    <Box >
                    <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mb={"0.5rem"}>Diploma Coderhouse</Heading>
                    <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}}>Escuela Secundaria E.C.E.A (2018)</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={{base:"1.5rem","2xl":"2rem"}} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"0.7rem"}>4.30/5</Box>
                </Box>
                <Text  color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"1rem"}>
                    Tuve la oportunidad de embarcarme en un curso en Coderhouse, donde pude ampliar mis conocimientos en lenguajes de programación como HTML, CSS.
            </Text>

            </Box>

            <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"} w={{base:"100%",md:"60%",lg:"50%","2xl":"35rem"}}>
            <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                <Box >
                    <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mb={"0.5rem"}>Phyton</Heading>
                    <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} >Escuela Secundaria E.C.E.A (2019 - 2021)</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={"1.5rem"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"0.7rem"}>4.50/5</Box>
            </Box>
            <Text  color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"1rem"}>
                Adquirí habilidades prácticas en la sintaxis de Python, la manipulación de datos, la creación de funciones y la resolución de problemas algorítmicos.
            </Text>

            </Box>

            <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"}  w={{base:"100%",md:"60%",lg:"50%","2xl":"35rem"}}>
            <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                <Box >
                    <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mb={"0.5rem"}>curso de programacion</Heading>
                    <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}}>EGG: Curso online (2022)</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={"1.5rem"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"0.7rem"}>4.80/5</Box>
            </Box>
            <Text  color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"1rem"}>
                Pude sumergirme en los conceptos fundamentales de la programación y adquirir una comprensión sólida de los principios básicos.
            </Text>

            </Box>
        </Box>


    )
}

export { Label1 }