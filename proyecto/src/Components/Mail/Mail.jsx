import { Box, Input, Text, Textarea, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';
import flecha from "/Img/flecha.svg"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const Mail = () => {
    const [state, handleSubmit] = useForm("meqbogqe");
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

    const validateForm = () => {
        const formErrors = {};
    
        if (!values.Nombre) {
          formErrors.Nombre = <Text color={"red"} fontSize={"1rem"}>Completa este campo</Text>
        }

        if (!values.Numero) {
            formErrors.Numero = <Text color={"red"}>Completa este campo</Text>
          }
    
        if (!values.Email) {
          formErrors.Email = <Text color={"red"}>Completa este campo</Text>
        }
    
        if (!values.Asunto) {
          formErrors.Asunto = <Text color={"red"}>Completa este campo</Text>
        }
    
        if (!values.Comentarios) {
          formErrors.Comentarios = <Text color={"red"}>Completa este campo</Text>
        }
    
        return formErrors;
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
    
        if (Object.keys(formErrors).length === 0) {
          handleSubmit(event); 
          setValues({}); 
        } else {
          setErrors(formErrors);
        }
    };



    if (state.succeeded) {
      return <Box textAlign={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" w={{base:"100%",lg:"60%",xl:"60%"}} p={{base:"1rem","2xl":"1.4rem"}} color={"#C4D0DF"}>¡gracias por la visita!</Box>;
    }
    return(
        <Box boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" p={{base:"1rem","2xl":"1.4rem"}}>
            <form onSubmit={handleFormSubmit} >
            {state.succeeded ? (
                <Box textAlign={"center"} display={"flex"} alignItems={"center"}
                justifyContent={"center"} boxShadow={"-0.2rem -0.2rem 0.7rem #2c3136, 0.5rem 0.2rem 0.7rem #1a1d20"} borderRadius={"0.4rem"}  bgGradient="linear(to-r, #1E2125, #23272B)" w={{base:"100%",lg:"60%",xl:"60%"}} p={{base:"1rem","2xl":"1.4rem"}} color={"#C4D0DF"}>¡gracias por la visita!</Box>
            ) : (
                <Box>
                    <Box display={{base:"column",lg:"flex"}} columnGap={"0.7rem"}>
                    <Box>
                        <FormLabel fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>TU NOMBRE</FormLabel>

                        <Input position={"0"} 
                        id="name"
                        type="text" 
                        name="Nombre"
                        w={{base:"100%",lg:"12rem",xl:"15rem","2xl":"17rem"}} mb={"0.7rem"} variant={"none"}  bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} 
                        onChange={handleChange}
                        value={values.Nombre || ''}/>
                        {errors.Nombre && <span className="error">{errors.Nombre}</span>}

                    </Box>
                    <Box>
                        <FormLabel fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>NUMERO DE TELEFONO</FormLabel>

                        <Input position={"0"} 
                        id="phone"
                        type="number" 
                        name="Numero"
                        w={{base:"100%",lg:"11rem",xl:"15rem","2xl":"17rem"}} mb={"0.7rem"} variant={"none"}  bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} 
                        onChange={handleChange}
                        value={values.Numero || ''}/>
                        {errors.Numero && <span >{errors.Numero}</span>}

                    </Box>
                </Box>
                <FormLabel fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>EMAIL</FormLabel>

                <Input position={"0"}  
                id="email"
                type="email" 
                name="Email"
                mb={"0.7rem"} variant={"none"}  bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"}
                onChange={handleChange}
                value={values.Email || ''} />
                 {errors.Email && <span className="error">{errors.Email}</span>}
                

                <FormLabel fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"} variant={"none"} >ASUNTO</FormLabel>

                <Input 
                id="subject"
                type="text" 
                name="Asunto"
                mb={"0.7rem"} variant={"none"} bg={"#191B1E"} color={"white"} border={"0.001rem solid rgb(24, 24, 24)"} borderBottom={"0.06rem solid rgb(77, 77, 77)"} borderTop={"0.09rem solid black"} h={"1.8rem"} borderRadius={"0.3rem"} fontSize={"0.7rem"} position={"0"}
                onChange={handleChange}
                value={values.Asunto || ''}/>
                {errors.Asunto && <span className="error">{errors.Asunto}</span>}
                

                <FormLabel fontSize={{base:"0.6rem",md:"0.6rem",lg:"0.6rem",xl:"0.8rem","2xl":"1rem"}} color={"gray"} mb={"0.7rem"}>TU MENSAJE</FormLabel>

                <Textarea 
                id="message"
                name="Comentarios"
                h={{lg:"8rem",xl:"10.5rem","2xl":"14.5rem"}} 
                variant={"none"} 
                fontSize={"0.7rem"} 
                mb={"1rem"}  bg={"#191B1E"} color={"white"} 
                border={"0.001rem solid rgb(24, 24, 24)"} 
                borderBottom={"0.06rem solid rgb(77, 77, 77)"} 
                borderTop={"0.09rem solid black"} 
                borderRadius={"0.3rem"} resize={"none"} position={"0"} 
                onChange={handleChange}
                value={values.Comentarios || ''}/>
                 {errors.Comentarios && <span className="error">{errors.Comentarios}</span>}
                

                <Button 
                type='submit'
                borderRadius={"0.2rem"} 
                bgGradient="linear(to-r, #1E2125, #23272B)" 
                mt={"0.5rem"} 
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
                    
            )}
            </form>
            
        </Box>
    )
}

export { Mail }