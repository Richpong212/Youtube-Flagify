import { Box, Image, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../components/Banner'
import FavoriteIcon from '@mui/icons-material/Favorite';


const HomePage = () => {
  const [countries, setCountries] = useState([])

  // fetching country data
  const fetchCountries = async () => {
     const res = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(res.data)
  }

  useEffect(() => {
      fetchCountries()
  }, [])

  return (
    <Box>
       <Banner />
       <Box
       >
          <Input 
            placeholder="Search for a country..."
            size="lg"
            variant="filled"
            width="100%"
            p={10}
            mt={10}
            id="search"
            onChange={()=>{}}
            onKeyDown={()=>{}}
            onBlur={()=>{}}
         />
       </Box>

       <Box
          display="flex"
          justifyContent="space-between"
          pt={10}
       >
          <Box><span>Flag</span></Box>
          <Box><span>Name</span></Box>
          <Box><span>Region</span></Box>
          <Box><span>Capital</span></Box>
          <Box><span>Population</span></Box>
          <Box><span>Favorite</span></Box>
       </Box>
       <hr style={{width: '100%'}} />
       {/* country  */}
       {
          countries.length > 0 ? countries.map((country: any) => (
               <Box
                key={country.latlng}
               >
                 <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems={'center'}
                    p='1rem'
                 >
                   <NavLink to=''>
                      <Image 
                        src={country.flags.png}
                        alt={country.name.common}
                        boxSize="50px"
                      />
                   </NavLink>
                   <NavLink to=''>
                      <span>{country.name.official.split(' ')[0]}</span>
                   </NavLink>
                   <NavLink to=''>
                      <span>{country.region}</span>
                   </NavLink>
                   <NavLink to=''>
                      <span>{country.capital}</span>
                   </NavLink>
                   <NavLink to=''>
                      <span>{country.population}</span>
                   </NavLink>
                   <NavLink to=''>
                      <FavoriteIcon />
                   </NavLink>
                 </Box>
               </Box>
          )) : 'loading...'
       }
    </Box>
  )
}

export default HomePage
