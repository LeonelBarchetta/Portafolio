import { Heading } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }
    return(
        <Heading 
        color={"white"} 
        fontSize={{base:"1.3rem",md:"1.4rem",lg:"1.5rem",xl:"2rem","2xl":"2.5rem"}}>
            LEONEL
        </Heading>
    )
}

export { Logo }