import { Box, Input, Text, Textarea, Button, Image } from '@chakra-ui/react';
import React from 'react';
import flecha from "/flecha.svg"

const Mail = () => {
    return(
        <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={{base:"1rem","2xl":"1.4rem"}}>
            <Box display={{base:"column",lg:"flex"}} columnGap={"0.7rem"}>
                <Box>
                    <Text fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>TU NOMBRE</Text>
                    <Input w={{base:"100%",lg:"12rem",xl:"15rem","2xl":"17rem"}} mb={"0.7rem"} variant={"none"} type='text' bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} position={"0"}/>
                </Box>
                <Box>
                    <Text fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>NUMERO DE TELEFONO</Text>
                    <Input w={{base:"100%",lg:"11rem",xl:"15rem","2xl":"17rem"}} mb={"0.7rem"} variant={"none"} type='number' bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} position={"0"}/>
                </Box>
            </Box>
            <Text fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>EMAIL</Text>
            <Input mb={"0.7rem"} variant={"none"} type='email' bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} position={"0"}/>
            <Text fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"} variant={"none"} type='text'>SUJETO</Text>
            <Input mb={"0.7rem"} variant={"none"} type='text' bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} position={"0"}/>
            <Text fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>TU MENSAJE</Text>
            <Textarea 
            h={{lg:"8rem",xl:"10.5rem","2xl":"14.5rem"}} 
            variant={"none"} 
            fontSize={"0.7rem"} 
            mb={"1rem"}  bg={"#191B1E"} color={"white"} 
            border={"0.001rem solid rgb(24, 24, 24)"} 
            borderBottom={"0.06rem solid rgb(77, 77, 77)"} 
            borderTop={"0.09rem solid black"} 
            borderRadius={"0.3rem"} resize={"none"} position={"0"} />

            <Button 
            borderRadius={"0.2rem"} 
            bgGradient="linear(to-r, #1E2125, #23272B)"  
            w={{lg:"7rem",xl:"9rem","2xl":"12rem"}} 
            h={{base:"2rem",xl:"2.5rem","2xl":"3rem"}}  
            boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"}
            color={"#ff004c"}
            fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} 
            _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)"}}
            display={"flex"}
            >ENVIAR MENSAJE
            <Image src={flecha} h={{base:"0.5rem",md:"0.5rem",lg:"0.5rem",xl:"0.8rem","2xl":"1rem"}} ml={"0.5rem"}/>
            </Button>
        </Box>
    )
}

export { Mail }