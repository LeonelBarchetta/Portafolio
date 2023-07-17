import { Box, Button, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import burger from "/burger.svg"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'



const Navbar = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Box 
        display={"flex"} 
        color={"#C4D0DF"} 
        position={"2"}
        columnGap={{lg:"1.5rem",xl:"2rem","2xl":"3rem"}} 
        fontSize={{lg:"0.5rem",xl:"0.6rem","2xl":"1rem"}} 
        alignItems={"center"}>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}} 
            >
                <Link href="#inicio">
                    INICIO 
                </Link>
                
            </Text>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}}>

                <Link href="#features">
                    FEATURES
                </Link>
                

            </Text>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}}>

                <Link href='#portafolio'>
                    PORTAFOLIO
                </Link>
                 

            </Text>
            <Text 
            display={{base:"none",md:"none",lg:"block",xl:"block","2xl":"block"}}
            _hover={{ textDecoration:"underline" , cursor:"pointer"}}>

                <Link href='#resumen'>
                    RESUMEN 
                </Link>
                

            </Text>
            <Link 
            href='#contacto'
            display={{base:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}}
            borderRadius={"0.3rem"} 
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
            bgGradient="linear(to-r, #1E2125, #23272B)"  
            w={{lg:"6rem",xl:"6.5rem","2xl":"9.5rem"}} 
            h={{lg:"2rem",xl:"2.5rem","2xl":"3rem"}}  
            boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"}
            color={"#ff004c"}
            fontSize={{lg:"0.5rem",xl:"0.6rem","2xl":"1rem"}}  
            _hover={{ bgGradient:"linear(to-r, #1f2225, #3d444b)"}}
            position={"1"}
            >CONTACTAME
            </Link>

            <Menu>
                <MenuButton 
                borderRadius={"50%"} _hover={{cursor:"pointer",bg:"#3A3A3A"}}>
                    <Image src={burger} display={{lg:"none"}} h={{base:"2rem",md:"2rem"}}/>
                </MenuButton>

                <MenuList bg={"#272C30"} borderColor={"#272C30"} boxShadow={"-0.7rem 1rem 0.8rem rgba(0, 0, 0, 0.664)"}>
                    <Link href="#inicio" >
                        <MenuItem bg={"272C30"} _hover={{bg:"#41464A"}}>
                            INICIO
                        </MenuItem>
                        
                    </Link>
                    <Link href="#features" >
                        <MenuItem bg={"272C30"} _hover={{bg:"#41464A"}}>
                            FEATURES
                        </MenuItem>
                        
                    </Link>
                    <Link href="#portafolio" >
                        <MenuItem bg={"272C30"} _hover={{bg:"#41464A"}}>
                            PORTAFOLIO
                        </MenuItem>
                        
                    </Link>
                    <Link href="#resumen" >
                        <MenuItem bg={"272C30"} _hover={{bg:"#41464A"}}>
                            RESUMEN
                        </MenuItem>
                        
                    </Link>
                    <Link href="#contacto" >
                        <MenuItem bg={"272C30"} _hover={{bg:"#41464A"}}>
                            CONTACTAME
                        </MenuItem>
                        
                    </Link>
                </MenuList>
                
            </Menu>
           

            

            
        </Box>
    )
}

export { Navbar }