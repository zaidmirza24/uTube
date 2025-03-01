import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import './index.css'
function App() {
  return <>
    <BrowserRouter>
      <Box sx={{backgroundColor:'#ffff'}}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/channel/:id" element={<ChannelDetail/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  </>
}

export default App