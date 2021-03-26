import React from 'react'

export default function Friend({ userDe }) {
  if (!userDe) {
    return <h3>Working fetching your user &apos;s info...</h3>
  }

  return (
    <div className='user'>
      <h2>{userDe.name} <br></br>
      {userDe.email}</h2>
    </div>
  )
}

 