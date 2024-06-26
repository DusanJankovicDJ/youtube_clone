import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos, ChannelCard } from './'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,134,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      |<Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }}/>
          <Videos videos={videos} />
      </Box>
      </Box>
      )
}

      export default ChannelDetail