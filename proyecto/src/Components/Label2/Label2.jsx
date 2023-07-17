import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Label2 = () => {
    return(
        <Box>
            <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"} w={{base:"100%",md:"60%",lg:"50%","2xl":"35rem"}}>
                <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                    <Box >
                    <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mb={"0.5rem"}>HTML y CSS</Heading>
                    <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}}>Frontend</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={{base:"1.5rem","2xl":"2rem"}} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"0.7rem"}>4.30/5</Box>
                </Box>
                <Text  color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"1rem"}>
                    Poseo habilidades en HTML y CSS, tengo un dominio sólido en el diseño y estructura de páginas web. Puedo crear interfaces intuitivas y visualmente atractivas.
            </Text>

            </Box>

            <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"} w={{base:"100%",md:"60%",lg:"50%","2xl":"35rem"}}>
            <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                <Box >
                    <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mb={"0.5rem"}>Javascript</Heading>
                    <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} >Frontend</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={"1.5rem"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"0.7rem"}>4.50/5</Box>
            </Box>
            <Text  color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"1rem"}>
                Tengo habilidades sólidas en JavaScript. He adquirido un profundo conocimiento en este lenguaje, lo que me permite desarrollar aplicaciones web interactivas y funcionales. 
            </Text>

            </Box>

            <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={"1.5rem"} mb={"2rem"}  w={{base:"100%",md:"60%",lg:"50%","2xl":"35rem"}}>
            <Box display={"flex"} justifyContent={"space-between"} pb={"1.5rem"} borderBottom={"0.1rem solid black"}>
                <Box >
                    <Heading color={"#C4D0DF"} fontSize={{base:"0.9rem",md:"0.9rem",lg:"1rem",xl:"1.2rem","2xl":"1.8rem"}} mb={"0.5rem"}>React - Node js</Heading>
                    <Text color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}}>Frontend</Text>
                </Box>
                <Box color={"#DE0748"} display={"flex"} alignItems={"center"} p={"0 0.5rem"} h={"1.5rem"} justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.2rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"0.7rem"}>4.80/5</Box>
            </Box>
            <Text  color={"gray"} fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.7rem",xl:"1rem","2xl":"1.2rem"}} mt={"1rem"}>
                Tengo capacidad para construir componentes reutilizables y crear interacciones fluidas en React. Estoy constantemente buscando nuevas oportunidades para expandir mis habilidades. 
            </Text>

            </Box>
        </Box>

    )
}

export { Label2 }