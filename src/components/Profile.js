import React from 'react'
import SideBar from './SideBar';
import MainComponent from './MainComponent';
import RightSideBar from './RightSideBar';

const Profile = () => {
  return (
    <div className=" bg-gray-200 flex flex-col min-h-screen"> 
    <div className="flex flex-1">
      <SideBar/>
      <MainComponent/>
      <RightSideBar/>
      </div>
    </div>
  )
}

export default Profile;
