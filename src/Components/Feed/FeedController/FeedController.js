import React, { useState } from 'react'
import FeedModal from '../FeedModal/FeedModal'
import FeedPhotos from '../FeedPhotos/FeedPhotos'

const FeedController = () => {
  const [ modalPhoto, setModalPhoto ] = useState(null);
  return (
    <div>
     { modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default FeedController