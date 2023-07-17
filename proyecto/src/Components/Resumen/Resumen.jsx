import React, { useState } from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Titulo4 } from '../Titulo4/Titulo4';
import { Decoracion } from '../Decoracion/Decoracion';
import { Label1 } from '../Label1/Label1';
import { Label2 } from '../Label2/Label2';
import { Label3 } from '../Label3/Label3';

const Resumen = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }

    const [label,SetLabel]=useState(true)
    const [labeldos,SetLabeldos]=useState(false)
    const [coloruno,SetColoruno]=useState("#ff004c")
    const [colordos,SetColordos]=useState("#C4D0DF")
    const [shadow,SetShadow]=useState("-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20")
    const [shadowdos,SetShadowdos]=useState("none")



    function botonuno (){
        if(label==false){
            SetLabel(true)
            SetLabeldos(false)
            SetColoruno("#ff004c")
            SetColordos("#C4D0DF")
            SetShadow("-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20")
            SetShadowdos("none")
        }
    }
    function botondos (){
        if(labeldos==false){
            SetLabeldos(true)
            SetLabel(false)
            SetColordos("#ff004c")
            SetColoruno("#C4D0DF")
            SetShadowdos("-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20")
            SetShadow("none")
        }
    }

    
    
    return(
        <Box id='resumen' bg={"#212428"} w={"75%"} m={"0 auto"} pt={"5rem"} pb={{base:"4.5rem",md:"5rem",lg:"5rem",xl:"6rem","2xl":"8rem"}} borderBottom={"0.1rem solid black"}>
            <Box mb={"2rem"}>
                <Titulo4/>
                <Flex position={"0"} mt={"3rem"} boxShadow={"0.4rem -0.2rem 0.7rem #23272B, 0.2rem 0.2rem 0.7rem #1D1F23"} >
                    <Button onClick={botonuno}
                     position={"0"}
                    boxShadow={shadow}
                    bgGradient="linear(to-b, #1E2024, #1F2125)"   
                    h={{base:"2.5rem",lg:"3rem",xl:"3.2rem","2xl":"4rem"}}  
                    color={coloruno}
                    fontSize={{base:"0.5rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}   
                    _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)"}}
                    w={"100%"}>educacion</Button>


                    <Button
                    onClick={botondos}
                    position={"0"}
                    boxShadow={shadowdos}
                    bgGradient="linear(to-b, #1E2024, #1F2125)" 
                    h={{base:"2.5rem",lg:"3rem",xl:"3.2rem","2xl":"4rem"}} 
                    color={colordos}
                    fontSize={{base:"0.5rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}  
                    _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)"}}
                     w={"100%"}>habilidades</Button>
                </Flex>
                
            </Box>
            { label && <Text color={"#DE0748"} fontSize={{base:"0.7rem",md:"0.7rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}>2018 - 2023</Text>}
            {label && <Heading color={"#C4D0DF"} fontSize={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.3rem","2xl":"3rem"}}>Calidad de Educacion</Heading>}
            
            { labeldos && <Text color={"#DE0748"} fontSize={{base:"0.7rem",md:"0.7rem",lg:"0.7rem",xl:"0.8rem","2xl":"1rem"}}>2018 - 2023</Text>}
            {labeldos && <Heading color={"#C4D0DF"} fontSize={{base:"1.5rem",md:"1.9rem",lg:"2rem",xl:"2.3rem","2xl":"3rem"}}>Habilidades Profesionales</Heading>}
                
            <Box display={"flex"} mt={"2rem"}>
                <Decoracion/>
                {label && <Box >
                    <Label1/>
                </Box>}
                {labeldos && <Box>
                    <Label2/>
                </Box>}
            </Box>
        </Box>
    )
}

export { Resumen }