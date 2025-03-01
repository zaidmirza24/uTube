import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Sidebar,Videos} from './index'
import {FetchFromApi} from '../utils/FetchFromApi'

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchFromApi(`search?part=snippet&q=${selectedCategory}&maxResults=50`);
        setVideos(data.items ?? []);
      } catch (error) {
        console.log("Error fetching videos", error);
      }
    };
  
    // Add a delay to reduce rapid API calls
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500); // 500ms delay
  
    return () => clearTimeout(delayDebounce); // Cleanup on unmount or re-render
  }, [selectedCategory]);
  
  return (
    <Stack
      sx={{ flexDirection: { sx: "column", md: 'row' } }}
    >
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d', px: { sm: 0, md: 2 }
      }}
      >
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
         />
        <Typography className='copyright'
          variant='body2'
          sx={{
            mt: 1.5,
          }}
        >
          &copy; Copyright 2025 Zaid Mirza
        </Typography>

      </Box>
      <Box p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2
        }}
      >
        <Typography variant='h4'
          fontWeight={'bold'}
          mb={2}

        >
          <div className='flex gap-1'>
          <span>{selectedCategory}</span>
          <span className='text-red-500'>Videos</span>
          </div>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed