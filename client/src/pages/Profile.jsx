import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns';

const Profile = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <section className='p-10 h-max bg-slate-900 border-slate-600 border rounded-lg'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-xl border p-5 rounded-lg border-slate-600'>
        <h2>Username : <span className='font-thin'>{user.username}</span></h2>
        <p>Email : <span className='font-thin'>{user.email}</span></p>
        <p>Joined : <span className='font-thin'>{formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}</span></p>
        <p>Role : <span className='font-thin'>{user.role}</span></p>
      </div>

      <div>

      </div>

    </section>
  )
}

export default Profile