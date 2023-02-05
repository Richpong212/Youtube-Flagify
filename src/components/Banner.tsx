import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'

const Banner = () => {
  return (
    <Box>
       <Box
          display="flex"
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          pt='2rem'
          gap={'3rem'}
       >
         <Heading letterSpacing='1rem' size='6xl' fontSize={'6rem'} >Flagify</Heading>
         <Text letterSpacing='0.5rem'>Country-data, made elegantly simple</Text>  
       </Box>
    </Box>
  )
}

export default Banner