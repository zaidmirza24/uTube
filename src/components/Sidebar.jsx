import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/Constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction={"row"}
    sx={{
      overflow:'auto',
      height:{sx:'auto',md:'95%'},
      flexDirection:{md:'column'},
    }}
    >
      {
        categories.map((category)=>(
         
          <button key={category.name} className='category-btn'
          onClick={()=>(setSelectedCategory(category.name))}
          style={{
            background:category.name === selectedCategory && 'red',
            color:'black'
          }}
          
          >
            <span className={`m-1 ${selectedCategory === category.name ? 'text-black':'text-red-500'}`}>{category.icon}</span>
            <span className='m-1'>{category.name}</span>
          </button>
        ))
      }

    </Stack>
  )
}

export default Sidebar