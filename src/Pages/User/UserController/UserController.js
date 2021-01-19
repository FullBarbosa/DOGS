import React,{useContext} from 'react'
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import Feed from '../../../Components/Feed/FeedController/FeedController';
import UserPhotoPost from '../UserPhotoPost/UserPhotoPost';
import UserStats from '../UserStats/UserStats';
const UserController = () => {
  
  return (
    <section className="container">
      
     <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route  path="estatisticas" element={<UserStats/>} />
      </Routes>
    
    </section>
  )
}

export default UserController
 