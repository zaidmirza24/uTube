import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoVideoTitle,demoChannelUrl,demoVideoUrl ,demoChannelTitle} from '../utils/Constants.jsx'

function VideoCard({video:{id:{videoId},snippet},video}) {
  return (
    <Card className='md:w-[320px] sm:w-[100%]'
    sx={{width:{xs:'100%',sm:'358px',md:'320px'},boxShadow:'none',borderRadius:0}}
    >
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
                width:{
                    xs:'100%',
                    sm:'358px',
                    md:'320px'
                },
                height:180
            }}
            />
        </Link>
        <CardContent sx={
            {
                backgroundColor:'1e1e1e',
                height:'106px'
            }
        }>
            <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                <Typography
                variant='subtitle1'
                fontWeight={'bold'}
                
                >
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                <Typography
                variant='subtitle2'
                fontWeight={'bold'}
                color='gray'

                >
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard