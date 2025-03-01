// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { FetchFromApi } from '../utils/FetchFromApi'
// import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'
// import { Typography, Box, Stack } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'
// import Loader from './Loader'

// import Videos from './Videos'

// function VideoDetail() {
//   const [VideoDetail, setVideoDetail] = useState(null)
//   const [videos, setVideos] = useState(null);
//   const { id } = useParams()
//   useEffect(() => {
//     try {
//       FetchFromApi(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then((res) => { setVideoDetail(res.items[0]) })

//       FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
//       .then((data) => setVideos(data.items))

//     } catch (error) {
//       console.log("error while fetching video details:", error)

//     }
//   }, [id])
//   if (!VideoDetail?.snippet) return <Loader/>
//   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = VideoDetail;
//   return (
//     <Box minHeight={'95vh'}>
//       <Stack direction={{ xs: 'column', md: 'row' }} >
//         <Box flex={1}>
//           <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
//             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
//             <Typography variant='h5' fontWeight={'bold'} p={2}>
//               {title}
//             </Typography >
//             <Stack direction={'row'} justifyContent={'space-between'} sx={{
//               py: 1, px: 2
//             }}>
//               <Link to={`/channel/${channelId}`}>
//                 <Typography variant={{ sm: 'subtitle1', md: 'h6' }}>
//                   {channelTitle}
//                   <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
//                 </Typography>
//               </Link>

//               <Stack direction="row" gap="20px" alignItems="center">
//                 <Typography variant="body1" sx={{ opacity: 0.7 }}>
//                   {parseInt(viewCount).toLocaleString()} views
//                 </Typography>
//                 <Typography variant="body1" sx={{ opacity: 0.7 }}>
//                   {parseInt(likeCount).toLocaleString()} likes
//                 </Typography>
//               </Stack>

//             </Stack>

//           </Box>

//         </Box>
//         <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
//           <Videos videos={videos} direction="column" />
//         </Box>

//       </Stack>

//     </Box>
//   )
// }

// export default VideoDetail


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./index.js";
import { FetchFromApi } from "../utils/FetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh" 
    className="overflow-y-scroll">
      <Stack direction={{ xs: "column", md: "row" }} >
        <Box flex={1} >
          <Box
           sx={{ width: "100%", position: "sticky", top: "26px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography className="flex gap-2 items-center" variant="h5" fontWeight="bold" p={2}>
              {title}
            <Link to={`https://ssyoutube.com/watch?v=${id}`} target="#blank">
            <button className="border-2 text-lg font-normal bg-red-600 px-3 py-1 rounded-full">Download</button>
            </Link>
            </Typography>
            <Stack direction="row" 
            
            justifyContent="space-between" sx={{  }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}   >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" 
              
              alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;