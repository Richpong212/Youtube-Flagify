import React from 'react'
import { Box } from '@chakra-ui/react'
import HomeIcon from '@mui/icons-material/Home';
import { MoonIcon } from '@chakra-ui/icons'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      display="flex"
      width= '100%'
      justifyContent="space-between"
      alignItems="center"
    >
       <Box>
        <NavLink to='/'>
            <span>codeGintor</span>
        </NavLink>
       </Box>
       <Box
         display="flex"
         gap='1rem'
       >
         <NavLink to='/'><span><HomeIcon /></span></NavLink>
         <NavLink to='/favorite'><span><FavoriteIcon /></span></NavLink>
         <NavLink to=''><span><MoonIcon /></span></NavLink>
       </Box>
    </Box>
  )
}

export default Navbar
