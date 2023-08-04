import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {Box} from "@mui/material";

import {Videos, ChannelCard} from "./";
import { fetchfromAPI } from "../utils/fetchfromAPI";

const ChannelDetail = () => {

  const[ChannelDetail,setChannelDetail] =useState(null);
  const[videos, setVideos]=useState([]);

const {id} =useParams();
console.log(ChannelDetail,videos)
useEffect(()=>{
 fetchfromAPI(`channels?part="snippet&id=${id}`)
 .then((data) => setChannelDetail(data?.items[0]));

fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
 .then((data) => setVideos(data?.items));
},[id])
  return (
   <Box minHeight="95vh">
    <Box>
      <div style={{background:"linear-gradient(90deg, rgba(0,24,36,1) 0%, rgba(0,212,255,1) 0%, rgba(223,39,190,1) 88%)",
      zIndex:10,
      height:'300px'}}/>

      <ChannelCard channelDetail={ChannelDetail}
      marginTop="-110px"></ChannelCard>

     
    </Box>
    <Box display="flex" p="2">
      <Box sx={{mr:{sm:'100px'}}}></Box>
      <Videos videos={videos}/>
    </Box>
   </Box>
  )
}

export default ChannelDetail