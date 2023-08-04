import {useState,useEffect} from 'react';
import {Box, Stack , Typography, autocompleteClasses} from '@mui/material'
import {Sidebar, Videos} from './';
import { fetchfromAPI } from '../utils/fetchfromAPI';


const Feed = () => {
    const [selectedCategory,setSelectedCategory]=useState('New');
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
    fetchfromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> setVideos(data.items))
    },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:
    "column",md:"row"}}}>
      <Box sx={{height:{sx:'auto' ,md:'92vh'},borderRight:'1px solid #3d3d3d ',px:{sx:0,md:2} }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyright 2023 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh', flex: 2}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
        {selectedCategory}
        <span style={{color:'#F31503',padding:'6px'}}>videos</span>

        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed