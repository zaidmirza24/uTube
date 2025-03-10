import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos,ChannelCard} from './index'
import { FetchFromApi } from '../utils/FetchFromApi'

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()
  useEffect(() => {
    FetchFromApi(`channels?part="snippet&id=${id}`).then((data)=>{
      setChannelDetail(data?.items[0])
    })
    FetchFromApi(`search?channelId=${id}&part=snippet&order=date&maxResults=50`).then((data)=>{
      setVideos(data?.items)
    })
  }, [id])
  
  return (
    <Box
    minHeight={'95vh'}
    >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height:'300px',
        }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop={'-93px'}/>
          
      </Box>
      <Box display={'flex'} p={'2'}>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail