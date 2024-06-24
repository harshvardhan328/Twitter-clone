import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';

const RightSidebar = ({ otherUsers }) => {

  // Fixed list of users to follow
  const fixedUsers = [
    { _id: '1', name: 'Elon Musk', username: 'elonmusk.in', avatar: 'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg' },
    { _id: '2', name: 'RVCJ Media', username: 'RVCJ_FB.in', avatar: 'https://pbs.twimg.com/profile_images/1559752542372122624/6UiH4Ubt_400x400.jpg' },
    { _id: '3', name: 'PMO INDIA', username: 'pmoindia.in', avatar: 'https://pbs.twimg.com/profile_images/1134090740592627712/0Fp-U5-p_400x400.png' }
  ];

  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <CiSearch size="20px" />
        <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {
          // Render fixed users
          fixedUsers.map((user) => (
            <div key={user._id} className='flex items-center justify-between my-3'>
              <div className='flex'>
                <div>
                  <Avatar src={user.avatar} size="40" round={true} />
                </div>
                <div className='ml-2'>
                  <h1 className='font-bold'>{user.name}</h1>
                  <p className='text-sm'>{`@${user.username}`}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user._id}`}>
                  <button className='px-2 py-0.5 bg-black text-white rounded-full text-sm'>Profile</button>
                </Link>
              </div>
            </div>
          ))
        }
        {
          // Render dynamic users
          otherUsers?.map((user) => (
            <div key={user?._id} className='flex items-center justify-between my-3'>
              <div className='flex'>
                <div>
                  <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="40" round={true} />
                </div>
                <div className='ml-2'>
                  <h1 className='font-bold'>{user?.name}</h1>
                  <p className='text-sm'>{`@${user?.username}`}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                  <button className='px-2 py-0.5 bg-black text-white rounded-full text-sm'>Profile</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default RightSidebar;
