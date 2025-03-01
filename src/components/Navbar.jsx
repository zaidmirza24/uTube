import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/Constants.jsx'
import SearchBar from './SearchBar'
function Navbar() {
  return (
    <Stack
      className='border-b-[1.5px] bg-black'
      direction='row' 
      alignItems='center'
      p={2}
      sx={{ position: 'sticky', background: '#ffff', top: 0, justifyContent: 'space-between' }}
    >
      <Link to='/' className='flex items-center gap-2'>
        <img src={logo} alt="logo" className='w-12' />
        <span className='text-2xl font-bold '>uTube</span>
      </Link>
      <SearchBar />

    </Stack>
  ) 
}

export default Navbar