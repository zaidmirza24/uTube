import React from 'react'
import { Stack,Box } from '@mui/material'
import {VideoCard,ChannelCard} from './index'
import Loader from './Loader'

const Videos = ({videos,direction}) => {
  console.log(videos)
  if(!videos?.length) return <Loader/>
  // console.log(videos)
  return (
    <Stack direction={direction || 'row'}
    flexWrap={'wrap'}
    justifyContent={'start'}
    gap={2}
    >
      {videos?.map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos