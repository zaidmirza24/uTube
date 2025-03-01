import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {Videos} from './index'
import {FetchFromApi} from '../utils/FetchFromApi'
import { useParams } from 'react-router-dom'

function SearchFeed() {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  useEffect(() => {
    // const fetchData = async () => {
      try {
        FetchFromApi(`search?part=snippet&q=${searchTerm}&maxResults=50`).then((data)=>(setVideos(data.items ?? [])));
      } catch (error) {
        console.log("Error fetching videos", error);
      }
    // };
  
    // Add a delay to reduce rapid API calls
    // const delayDebounce = setTimeout(() => {
    //   fetchData();
    // }, 100); // 500ms delay
  
    // return () => clearTimeout(delayDebounce); // Cleanup on unmount or re-render
  }, [searchTerm]);
  
  return (
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
            <span>Search Results for :</span>
          <span className='text-red-500'>{searchTerm}</span>
          </div>
        </Typography>
        <Videos videos={videos}/>
      </Box>        
  )
}

export default SearchFeed